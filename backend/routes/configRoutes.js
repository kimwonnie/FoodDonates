import express from "express";
import configController from "../controllers/configController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

console.log("configController:", configController);
console.log("getAllConfigs:", configController.getAllConfigs);
console.log("getConfigByKey:", configController.getConfigByKey);
console.log("createConfig:", configController.createConfig);

const router = express.Router();

// ==========================
// LISTAR CONFIGS
// ==========================
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getAll
);

// ==========================
// BUSCAR POR CHAVE
// ==========================
router.get(
  "/:chave",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getByKey
);

// ==========================
// CRIAR CONFIG
// ==========================
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.create
);

// ==========================
// ATUALIZAR CONFIG
// ==========================
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.update
);

// ==========================
// DELETAR CONFIG
// ==========================
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.delete
);

export default router;