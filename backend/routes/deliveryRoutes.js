import express from "express";
import deliveryController from "../controllers/deliveryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// ===============================
// CRIAR SOLICITAÇÃO DE ENTREGA
// ===============================
router.post(
  "/",
  authMiddleware,
  deliveryController.createDelivery
);

// ===============================
// LISTAR ENTREGAS DO USUÁRIO
// ===============================
router.get(
  "/me",
  authMiddleware,
  deliveryController.getUserDeliveries
);

// ===============================
// ATUALIZAR STATUS (DOADOR)
// ===============================
router.put(
  "/:id/status",
  authMiddleware,
  deliveryController.updateDeliveryStatus
);

// ===============================
// CANCELAR ENTREGA (RECEIVER)
// ===============================
router.put(
  "/:id/cancel",
  authMiddleware,
  deliveryController.cancelDelivery
);

export default router;