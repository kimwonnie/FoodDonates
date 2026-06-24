import express from "express";
import categoryController from "../controllers/categoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// listar categorias
router.get("/", categoryController.getAllCategories);

// buscar por id
router.get("/:id", categoryController.getCategoryById);

// criar categoria (admin)
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.createCategory
);

// atualizar categoria (admin)
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.updateCategory
);

// deletar categoria (admin)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.deleteCategory
);

export default router;