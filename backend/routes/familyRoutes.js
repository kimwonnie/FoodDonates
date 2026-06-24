import express from "express";
import familyController from "../controllers/familyController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  familyController.getAll
);

router.get(
  "/:id",
  authMiddleware,
  familyController.getById
);

router.post(
  "/",
  authMiddleware,
  familyController.create
);

router.put(
  "/:id",
  authMiddleware,
  familyController.update
);

router.patch(
  "/:id/status",
  authMiddleware,
  familyController.toggleStatus
);

router.delete(
  "/:id",
  authMiddleware,
  familyController.delete
);

export default router;