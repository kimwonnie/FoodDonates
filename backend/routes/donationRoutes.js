const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donationController");
const authMiddleware = require("../middlewares/authMiddleware");

// Public / authenticated
router.get("/", donationController.getAllDonations);
router.get("/:id", donationController.getDonationById);

// Protected
router.post("/", authMiddleware, donationController.createDonation);
router.put("/:id", authMiddleware, donationController.updateDonation);
router.delete("/:id", authMiddleware, donationController.deleteDonation);

module.exports = router;