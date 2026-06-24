import express from "express";
import categoryController from "../controllers/categoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// listar categorias
router.get("/", categoryController.getAll);

// buscar por id
router.get("/:id", categoryController.getById);

// criar categoria (admin)
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.create
);

// atualizar categoria (admin)
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.update
);

// deletar categoria (admin)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.delete
);

export default router;