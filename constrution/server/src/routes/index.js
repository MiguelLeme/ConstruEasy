import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/ProductController.js";

export const router = Router();

router.get("/products", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

router.post("/products", async (req, res) => {
  const { name, quantity, size, sizeUnit, description } = req.body;
  const product = await addProduct(name, quantity, size, sizeUnit, description);
  res.send(product);
});

router.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, quantity, size, sizeUnit, description } = req.body;
  const product = await updateProduct(
    id,
    name,
    quantity,
    size,
    sizeUnit,
    description
  );
  res.send(product);
});

router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await deleteProduct(id);
  res.send(product);
});
