const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// User profile
router.get("/me", authMiddleware, userController.getProfile);
router.put("/me", authMiddleware, userController.updateProfile);

// Admin only
router.get("/", authMiddleware, roleMiddleware("admin"), userController.getAllUsers);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), userController.deleteUser);

module.exports = router;