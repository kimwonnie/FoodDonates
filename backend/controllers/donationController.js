const Donation = require("../models/Donation");
const User = require("../models/User");

// Criar doação
exports.createDonation = async (req, res) => {
  try {
    const { foodName, quantity, expirationDate, location } = req.body;

    const donation = await Donation.create({
      foodName,
      quantity,
      expirationDate,
      location,
      donor: req.user.id,
      status: "available",
    });

    res.status(201).json({
      message: "Doação criada com sucesso",
      donation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar doação",
      error: error.message,
    });
  }
};

// Listar doações disponíveis
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ status: "available" })
      .populate("donor", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar doações",
      error: error.message,
    });
  }
};

// Buscar doação por ID
exports.getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id)
      .populate("donor", "name email");

    if (!donation) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }

    res.status(200).json(donation);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar doação",
      error: error.message,
    });
  }
};

// Atualizar doação
exports.updateDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);

    if (!donation) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }

    if (donation.donor.toString() !== req.user.id) {
      return res.status(403).json({ message: "Não autorizado" });
    }

    const updated = await Donation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Doação atualizada",
      donation: updated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar doação",
      error: error.message,
    });
  }
};

// Deletar doação
exports.deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);

    if (!donation) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }

    if (donation.donor.toString() !== req.user.id) {
      return res.status(403).json({ message: "Não autorizado" });
    }

    await donation.deleteOne();

    res.status(200).json({ message: "Doação removida" });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar doação",
      error: error.message,
    });
  }
};