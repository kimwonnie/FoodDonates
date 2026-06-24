import express from "express";
import donationController from "../controllers/donationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", donationController.getAllDonations);
router.get("/:id", donationController.getDonationById);

router.post("/", authMiddleware, donationController.createDonation);
router.put("/:id", authMiddleware, donationController.updateDonation);
router.delete("/:id", authMiddleware, donationController.deleteDonation);

export default router;