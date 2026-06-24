import express from "express";
import categoryController from "../controllers/categoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// LISTAR
router.get(
  "/",
  categoryController.getAll
);

// BUSCAR POR ID
router.get(
  "/:id",
  categoryController.getById
);

// CRIAR
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.create
);

// ATUALIZAR
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.update
);

// DELETAR
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.delete
);

export default router;