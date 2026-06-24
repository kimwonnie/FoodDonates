import express from "express";
import deliveryController from "../controllers/deliveryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, deliveryController.createDelivery);

router.get("/me", authMiddleware, deliveryController.getUserDeliveries);

router.put("/:id/status", authMiddleware, deliveryController.updateDeliveryStatus);

router.put("/:id/cancel", authMiddleware, deliveryController.cancelDelivery);

export default router;