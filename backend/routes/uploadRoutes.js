import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "huntleys-sauces",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Images only!"), false);
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", (req, res) => {
  const uploadSingle = upload.single("image");

  uploadSingle(req, res, function (err) {
    if (err) {
      console.error("UPLOAD ERROR:", err);
      return res.status(500).send({ message: err.message });
    }
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded" });
    }
    res.status(200).send({
      message: "Image uploaded successfully",
      image: req.file.path,
    });
  });
});

export default router;
