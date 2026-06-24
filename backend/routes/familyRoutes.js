import express from "express";
import familyController from "../controllers/familyController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, familyController.createFamily);
router.get("/", authMiddleware, familyController.getFamilies);
router.get("/:id", authMiddleware, familyController.getFamilyById);
router.put("/:id", authMiddleware, familyController.updateFamily);
router.delete("/:id", authMiddleware, familyController.deleteFamily);

export default router;