import express from "express";
import donationController from "../controllers/donationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// ===============================
// LISTAR DOAÇÕES (PÚBLICO OU LOGADO)
// ===============================
router.get(
  "/",
  donationController.getAllDonations
);

// ===============================
// BUSCAR DOAÇÃO POR ID
// ===============================
router.get(
  "/:id",
  donationController.getDonationById
);

// ===============================
// CRIAR DOAÇÃO (LOGADO)
// ===============================
router.post(
  "/",
  authMiddleware,
  donationController.createDonation
);

// ===============================
// ATUALIZAR DOAÇÃO (DONO)
// ===============================
router.put(
  "/:id",
  authMiddleware,
  donationController.updateDonation
);

// ===============================
// DELETAR DOAÇÃO (DONO)
// ===============================
router.delete(
  "/:id",
  authMiddleware,
  donationController.deleteDonation
);

export default router;