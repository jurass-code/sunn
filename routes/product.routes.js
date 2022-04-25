import Router from "express";
import ProductController from "../controllers/ProductController.js";

const router = new Router();

router.get("/product", ProductController.getAll);

// /api/product/add
router.post("/product/add", ProductController.create);

router.get("/product/:id", ProductController.getOne);

router.put("/product", ProductController.update);

router.delete("/product/:id", ProductController.delete);

export default router;
