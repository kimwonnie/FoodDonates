import express from "express";
import familyController from "../controllers/familyController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

console.log("familyController", familyController);

const router = express.Router();

// ===============================
// LISTAR FAMÍLIAS
// ===============================
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  familyController.getAllFamilies
);

// ===============================
// BUSCAR POR ID
// ===============================
router.get(
  "/:id",
  authMiddleware,
  familyController.getFamilyById
);

// ===============================
// CRIAR FAMÍLIA
// ===============================
router.post(
  "/",
  authMiddleware,
  familyController.createFamily
);

// ===============================
// ATUALIZAR FAMÍLIA
// ===============================
router.put(
  "/:id",
  authMiddleware,
  familyController.updateFamily
);

// ===============================
// ALTERAR STATUS
// ===============================
router.patch(
  "/:id/status",
  authMiddleware,
  familyController.toggleFamilyStatus
);

// ===============================
// DELETAR FAMÍLIA
// ===============================
router.delete(
  "/:id",
  authMiddleware,
  familyController.deleteFamily
);

export default router;