import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import Product from "./models/productModel.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const port = process.env.PORT;

const app = express();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
