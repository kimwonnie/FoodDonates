import express from "express";
import configController from "../controllers/configController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// listar configs
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getAllConfigs
);

// buscar por chave
router.get(
  "/:chave",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getConfigByKey
);

// criar config
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.createConfig
);

// atualizar config
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.updateConfig
);

// deletar config
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.deleteConfig
);

export default router;