import express from "express";
import ngoController from "../controllers/ngoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

console.log("ngoController", ngoController);

const router = express.Router();

// ===============================
// LISTAR ONGs
// ===============================
router.get(
  "/",
  ngoController.getAllNgos
);

// ===============================
// BUSCAR ONG POR ID
// ===============================
router.get(
  "/:id",
  ngoController.getNgoById
);

// ===============================
// CRIAR ONG
// ===============================
router.post(
  "/",
  authMiddleware,
  ngoController.createNgo
);

// ===============================
// ATUALIZAR ONG
// ===============================
router.put(
  "/:id",
  authMiddleware,
  ngoController.updateNgo
);

// ===============================
// ALTERAR STATUS
// ===============================
router.patch(
  "/:id/status",
  authMiddleware,
  ngoController.toggleNgoStatus
);

// ===============================
// DELETAR ONG
// ===============================
router.delete(
  "/:id",
  authMiddleware,
  ngoController.deleteNgo
);

export default router;