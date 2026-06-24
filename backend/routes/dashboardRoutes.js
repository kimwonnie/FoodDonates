import express from "express";
import dashboardController from "../controllers/dashboardController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/metrics", authMiddleware, roleMiddleware("admin"), dashboardController.getDashboardMetrics);

router.get("/donations-chart", authMiddleware, roleMiddleware("admin"), dashboardController.getDonationStatusChart);

router.get("/deliveries-chart", authMiddleware, roleMiddleware("admin"), dashboardController.getDeliveryStatusChart);

router.get("/users-growth", authMiddleware, roleMiddleware("admin"), dashboardController.getUserGrowthChart);

router.get("/summary", authMiddleware, roleMiddleware("admin"), dashboardController.getQuickSummary);

export default router;