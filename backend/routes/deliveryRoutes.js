const express = require("express");
const router = express.Router();

const deliveryController = require("../controllers/deliveryController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create delivery request
router.post("/", authMiddleware, deliveryController.createDelivery);

// User deliveries
router.get("/me", authMiddleware, deliveryController.getUserDeliveries);

// Update status (donor)
router.put("/:id/status", authMiddleware, deliveryController.updateDeliveryStatus);

// Cancel (receiver)
router.put("/:id/cancel", authMiddleware, deliveryController.cancelDelivery);

module.exports = router;