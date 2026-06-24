import express from "express";
import configController from "../controllers/configController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getAll
);

router.get(
  "/:chave",
  authMiddleware,
  roleMiddleware("admin"),
  configController.getByKey
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  configController.create
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.update
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  configController.delete
);

export default router;