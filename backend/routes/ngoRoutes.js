const express = require("express");
const router = express.Router();

const ngoController = require("../controllers/ngoController");
const authMiddleware = require("../middlewares/authMiddleware");

// NGO endpoints
router.post("/", authMiddleware, ngoController.createNgo);
router.get("/", ngoController.getAllNgos);
router.get("/:id", ngoController.getNgoById);
router.put("/:id", authMiddleware, ngoController.updateNgo);
router.delete("/:id", authMiddleware, ngoController.deleteNgo);

module.exports = router;