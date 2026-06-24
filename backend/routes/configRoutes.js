import express from "express";
import configController from "../controllers/configController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, roleMiddleware("admin"), configController.getConfig);

router.put("/", authMiddleware, roleMiddleware("admin"), configController.updateConfig);

export default router;