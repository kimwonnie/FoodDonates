const express = require("express");
const router = express.Router();

const configController = require("../controllers/configController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// Only admin config
router.get("/", authMiddleware, roleMiddleware("admin"), configController.getConfig);
router.put("/", authMiddleware, roleMiddleware("admin"), configController.updateConfig);

module.exports = router;