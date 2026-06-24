import Delivery from "../models/Delivery.js";
import Donation from "../models/Donation.js";

class DeliveryController {

  // ===============================
  // Criar solicitação de entrega
  // ===============================
  async createDelivery(req, res) {
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

      donation.status = "reserved";
      await donation.save();

      return res.status(201).json({
        message: "Entrega solicitada com sucesso",
        delivery,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao criar entrega",
        error: error.message,
      });
    }
  }

  // ===============================
  // Entregas do usuário
  // ===============================
  async getUserDeliveries(req, res) {
    try {
      const deliveries = await Delivery.find({
        $or: [
          { donor: req.user.id },
          { receiver: req.user.id }
        ],
      })
        .populate("donation")
        .populate("donor", "name email")
        .populate("receiver", "name email")
        .sort({ createdAt: -1 });

      return res.status(200).json(deliveries);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar entregas",
        error: error.message,
      });
    }
  }

  // ===============================
  // Atualizar status (doador)
  // ===============================
  async updateDeliveryStatus(req, res) {
    try {
      const { status } = req.body;

      const delivery = await Delivery.findById(req.params.id);

      if (!delivery) {
        return res.status(404).json({ message: "Entrega não encontrada" });
      }

      if (delivery.donor.toString() !== req.user.id) {
        return res.status(403).json({ message: "Não autorizado" });
      }

      delivery.status = status;
      await delivery.save();

      if (status === "completed") {
        await Donation.findByIdAndUpdate(delivery.donation, {
          status: "delivered",
        });
      }

      return res.status(200).json({
        message: "Status da entrega atualizado",
        delivery,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar entrega",
        error: error.message,
      });
    }
  }

  // ===============================
  // Cancelar entrega (receiver)
  // ===============================
  async cancelDelivery(req, res) {
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

      return res.status(200).json({
        message: "Entrega cancelada",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao cancelar entrega",
        error: error.message,
      });
    }
  }
}

export default new DeliveryController();