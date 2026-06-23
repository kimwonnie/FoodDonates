const Delivery = require("../models/Delivery");
const Donation = require("../models/Donation");

// Criar uma solicitação de entrega (pickup)
exports.createDelivery = async (req, res) => {
  try {
    const { donationId, receiverLocation } = req.body;

    const donation = await Donation.findById(donationId);

    if (!donation) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }

    if (donation.status !== "available") {
      return res.status(400).json({ message: "Doação não disponível" });
    }

    const delivery = await Delivery.create({
      donation: donationId,
      receiver: req.user.id,
      donor: donation.donor,
      receiverLocation,
      status: "pending",
    });

    // Atualiza status da doação
    donation.status = "reserved";
    await donation.save();

    res.status(201).json({
      message: "Entrega solicitada com sucesso",
      delivery,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar entrega",
      error: error.message,
    });
  }
};

// Listar entregas do usuário (como doador ou receptor)
exports.getUserDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find({
      $or: [{ donor: req.user.id }, { receiver: req.user.id }],
    })
      .populate("donation")
      .populate("donor", "name email")
      .populate("receiver", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar entregas",
      error: error.message,
    });
  }
};

// Atualizar status da entrega
exports.updateDeliveryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const delivery = await Delivery.findById(req.params.id);

    if (!delivery) {
      return res.status(404).json({ message: "Entrega não encontrada" });
    }

    // Apenas doador pode atualizar status
    if (delivery.donor.toString() !== req.user.id) {
      return res.status(403).json({ message: "Não autorizado" });
    }

    delivery.status = status;
    await delivery.save();

    // Se concluída, atualizar doação
    if (status === "completed") {
      await Donation.findByIdAndUpdate(delivery.donation, {
        status: "delivered",
      });
    }

    res.status(200).json({
      message: "Status da entrega atualizado",
      delivery,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar entrega",
      error: error.message,
    });
  }
};

// Cancelar entrega
exports.cancelDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id);

    if (!delivery) {
      return res.status(404).json({ message: "Entrega não encontrada" });
    }

    if (delivery.receiver.toString() !== req.user.id) {
      return res.status(403).json({ message: "Não autorizado" });
    }

    delivery.status = "cancelled";
    await delivery.save();

    await Donation.findByIdAndUpdate(delivery.donation, {
      status: "available",
    });

    res.status(200).json({
      message: "Entrega cancelada",
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao cancelar entrega",
      error: error.message,
    });
  }
};