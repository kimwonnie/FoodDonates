import express from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/me", authMiddleware, userController.getProfile);
router.put("/me", authMiddleware, userController.updateProfile);

router.get("/", authMiddleware, roleMiddleware("admin"), userController.getAllUsers);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), userController.deleteUser);

export default router;