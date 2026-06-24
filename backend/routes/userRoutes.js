import express from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// LISTAR USUÁRIOS
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getAll
);

// BUSCAR USUÁRIO
router.get(
  "/:id",
  authMiddleware,
  userController.getById
);

// CRIAR USUÁRIO
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.create
);

// ATUALIZAR USUÁRIO
router.put(
  "/:id",
  authMiddleware,
  userController.update
);

// ALTERAR STATUS
router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("admin"),
  userController.toggleStatus
);

// DELETAR USUÁRIO
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  userController.delete
);

export default router;