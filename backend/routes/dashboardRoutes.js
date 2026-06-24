import express from "express";
import dashboardController from "../controllers/dashboardController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

console.log("dashboardController", dashboardController);

const router = express.Router();

// ===============================
// DASHBOARD KPIs (ADMIN)
// ===============================
router.get(
  "/metrics",
  authMiddleware,
  roleMiddleware("admin"),
  dashboardController.getDashboardMetrics
);

// ===============================
// GRÁFICO: DOAÇÕES
// ===============================
router.get(
  "/donations-chart",
  authMiddleware,
  roleMiddleware("admin"),
  dashboardController.getDonationStatusChart
);

// ===============================
// GRÁFICO: ENTREGAS
// ===============================
router.get(
  "/deliveries-chart",
  authMiddleware,
  roleMiddleware("admin"),
  dashboardController.getDeliveryStatusChart
);

// ===============================
// GRÁFICO: CRESCIMENTO USUÁRIOS
// ===============================
router.get(
  "/users-growth",
  authMiddleware,
  roleMiddleware("admin"),
  dashboardController.getUserGrowthChart
);

// ===============================
// RESUMO RÁPIDO (HOME DASHBOARD)
// ===============================
router.get(
  "/summary",
  authMiddleware,
  roleMiddleware("admin"),
  dashboardController.getQuickSummary
);

export default router;