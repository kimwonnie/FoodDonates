import express from "express";
import ngoController from "../controllers/ngoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get(
  "/",
  ngoController.getAll
);

router.get(
  "/:id",
  ngoController.getById
);

router.post(
  "/",
  authMiddleware,
  ngoController.create
);

router.put(
  "/:id",
  authMiddleware,
  ngoController.update
);

router.patch(
  "/:id/status",
  authMiddleware,
  ngoController.toggleStatus
);

router.delete(
  "/:id",
  authMiddleware,
  ngoController.delete
);

export default router;