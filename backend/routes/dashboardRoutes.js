const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// Admin dashboard
router.get("/metrics", authMiddleware, roleMiddleware("admin"), dashboardController.getDashboardMetrics);

router.get("/donations-chart", authMiddleware, roleMiddleware("admin"), dashboardController.getDonationStatusChart);

router.get("/deliveries-chart", authMiddleware, roleMiddleware("admin"), dashboardController.getDeliveryStatusChart);

router.get("/users-growth", authMiddleware, roleMiddleware("admin"), dashboardController.getUserGrowthChart);

router.get("/summary", authMiddleware, roleMiddleware("admin"), dashboardController.getQuickSummary);

module.exports = router;