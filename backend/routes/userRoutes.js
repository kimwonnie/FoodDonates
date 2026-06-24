import express from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// =======================
// MEU PERFIL (GET)
// =======================
router.get("/me", authMiddleware, (req, res, next) => {
  req.params.id = req.user.id;
  return userController.getUserById(req, res, next);
});

// =======================
// ATUALIZAR MEU PERFIL
// =======================
router.put("/me", authMiddleware, (req, res, next) => {
  req.params.id = req.user.id;
  return userController.updateUser(req, res, next);
});

// =======================
// LISTAR USUÁRIOS (ADMIN)
// =======================
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getAllUsers
);

// =======================
// DELETAR USUÁRIO (ADMIN)
// =======================
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  userController.deleteUser
);

// =======================
// ALTERAR STATUS (ADMIN)
// =======================
router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("admin"),
  userController.toggleUserStatus
);

export default router;