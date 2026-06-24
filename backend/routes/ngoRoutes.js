import express from "express";
import ngoController from "../controllers/ngoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// listar ONGs
router.get(
  "/",
  ngoController.getAll
);

// buscar por id
router.get(
  "/:id",
  ngoController.getById
);

// criar ONG
router.post(
  "/",
  authMiddleware,
  ngoController.create
);

// atualizar ONG
router.put(
  "/:id",
  authMiddleware,
  ngoController.update
);

// alterar status
router.patch(
  "/:id/status",
  authMiddleware,
  ngoController.toggleStatus
);

// deletar ONG
router.delete(
  "/:id",
  authMiddleware,
  ngoController.delete
);

export default router;