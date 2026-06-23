const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// Admin reports
router.get("/system", authMiddleware, roleMiddleware("admin"), reportController.getSystemReport);

router.get("/activity", authMiddleware, roleMiddleware("admin"), reportController.getRecentActivityReport);

router.get("/performance", authMiddleware, roleMiddleware("admin"), reportController.getPerformanceReport);

router.get("/range", authMiddleware, roleMiddleware("admin"), reportController.getReportByDateRange);

router.get("/export", authMiddleware, roleMiddleware("admin"), reportController.exportBasicReport);

module.exports = router;