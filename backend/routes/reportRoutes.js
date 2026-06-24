import express from "express";
import reportController from "../controllers/reportController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

console.log("reportController", reportController);

const router = express.Router();

router.get(
  "/system",
  authMiddleware,
  roleMiddleware("admin"),
  reportController.getSystemReport
);

router.get(
  "/recent",
  authMiddleware,
  roleMiddleware("admin"),
  reportController.getRecentActivityReport
);

router.get(
  "/performance",
  authMiddleware,
  roleMiddleware("admin"),
  reportController.getPerformanceReport
);

router.get(
  "/range",
  authMiddleware,
  roleMiddleware("admin"),
  reportController.getReportByDateRange
);

router.get(
  "/export",
  authMiddleware,
  roleMiddleware("admin"),
  reportController.exportBasicReport
);

export default router;