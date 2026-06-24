import express from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// meu próprio perfil (corrigido)
router.get(
  "/me",
  authMiddleware,
  userController.getById
);

// atualizar próprio perfil
router.put(
  "/:id",
  authMiddleware,
  userController.update
);

// listar usuários (admin)
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getAll
);

// deletar usuário (admin)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  userController.delete
);

// alterar status (admin)
router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("admin"),
  userController.toggleStatus
);

export default router;