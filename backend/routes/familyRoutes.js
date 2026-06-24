import express from "express";
import familyController from "../controllers/familyController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// listar famílias
router.get(
  "/",
  authMiddleware,
  familyController.getAll
);

// buscar por id
router.get(
  "/:id",
  authMiddleware,
  familyController.getById
);

// criar família
router.post(
  "/",
  authMiddleware,
  familyController.create
);

// atualizar família
router.put(
  "/:id",
  authMiddleware,
  familyController.update
);

// alterar status
router.patch(
  "/:id/status",
  authMiddleware,
  familyController.toggleStatus
);

// deletar família
router.delete(
  "/:id",
  authMiddleware,
  familyController.delete
);

export default router;