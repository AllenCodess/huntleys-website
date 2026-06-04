import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import Product from "./models/productModel.js";

dotenv.config();
connectDB();

const port = process.env.PORT;

const app = express();

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
