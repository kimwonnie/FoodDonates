import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// ==========================
// PUBLIC ROUTES
// ==========================
router.post("/register", (req, res, next) =>
  authController.register(req, res, next)
);

router.post("/login", (req, res, next) =>
  authController.login(req, res, next)
);

export default router;