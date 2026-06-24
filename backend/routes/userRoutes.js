import express from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// =======================
// MEU PERFIL
// =======================
router.get(
  "/me",
  authMiddleware,
  (req, res, next) => {
    req.params.id = req.user.id;
    return userController.getById(req, res, next);
  }
);

// =======================
// ATUALIZAR MEU PERFIL
// =======================
router.put(
  "/me",
  authMiddleware,
  (req, res, next) => {
    req.params.id = req.user.id;
    return userController.update(req, res, next);
  }
);

// =======================
// LISTAR USUÁRIOS (ADMIN)
// =======================
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getAll
);

// =======================
// BUSCAR USUÁRIO POR ID (ADMIN)
// =======================
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getById
);

// =======================
// CRIAR USUÁRIO (ADMIN)
// =======================
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.create
);

// =======================
// ATUALIZAR USUÁRIO (ADMIN)
// =======================
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  userController.update
);

// =======================
// ALTERAR STATUS (ADMIN)
// =======================
router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("admin"),
  userController.toggleStatus
);

// =======================
// DELETAR USUÁRIO (ADMIN)
// =======================
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  userController.delete
);

export default router;