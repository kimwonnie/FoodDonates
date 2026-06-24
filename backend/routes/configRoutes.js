import express from "express";
import configController from "../controllers/configController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

console.log("configController", configController);

const router = express.Router();

// ==========================
// LISTAR CONFIGS
// ==========================
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getAllConfigs
);

// ==========================
// BUSCAR POR CHAVE
// ==========================
router.get(
  "/key/:chave",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getConfigByKey
);

// ==========================
// CRIAR CONFIG
// ==========================
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.createConfig
);

// ==========================
// ATUALIZAR CONFIG
// ==========================
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.updateConfig
);

// ==========================
// DELETAR CONFIG
// ==========================
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.deleteConfig
);

export default router;