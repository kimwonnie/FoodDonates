import express from "express";
import configController from "../controllers/configController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// =======================
// CONFIG (ADMIN ONLY)
// =======================

// listar configs
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getAll
);

// buscar por chave
router.get(
  "/:chave",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getByKey
);

// criar config
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.create
);

// atualizar config
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.update
);

// deletar config
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.delete
);

export default router;