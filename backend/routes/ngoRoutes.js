import express from "express";
import ngoController from "../controllers/ngoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, ngoController.createNgo);
router.get("/", ngoController.getAllNgos);
router.get("/:id", ngoController.getNgoById);
router.put("/:id", authMiddleware, ngoController.updateNgo);
router.delete("/:id", authMiddleware, ngoController.deleteNgo);

export default router;