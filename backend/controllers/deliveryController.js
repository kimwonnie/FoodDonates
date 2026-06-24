import Delivery from "../models/Delivery.js";
import Donation from "../models/Donation.js";

class DeliveryController {

  // ===============================
  // Criar solicitação de entrega
  // ===============================
  async createDelivery(req, res, next) {
    try {
      const { donationId, receiverLocation } = req.body;

      const donation = await Donation.findById(donationId);

      if (!donation) {
        return res.status(404).json({
          success: false,
          message: "Doação não encontrada"
        });
      }

      if (donation.status !== "available") {
        return res.status(400).json({
          success: false,
          message: "Doação não disponível"
        });
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
        success: true,
        message: "Entrega solicitada com sucesso",
        data: delivery
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Entregas do usuário
  // ===============================
  async getUserDeliveries(req, res, next) {
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

      return res.status(200).json({
        success: true,
        data: deliveries
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Atualizar status (doador)
  // ===============================
  async updateDeliveryStatus(req, res, next) {
    try {
      const { status } = req.body;

      const delivery = await Delivery.findById(req.params.id);

      if (!delivery) {
        return res.status(404).json({
          success: false,
          message: "Entrega não encontrada"
        });
      }

      if (delivery.donor.toString() !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Não autorizado"
        });
      }

      delivery.status = status;
      await delivery.save();

      if (status === "completed") {
        await Donation.findByIdAndUpdate(delivery.donation, {
          status: "delivered",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Status da entrega atualizado",
        data: delivery
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Cancelar entrega (receiver)
  // ===============================
  async cancelDelivery(req, res, next) {
    try {
      const delivery = await Delivery.findById(req.params.id);

      if (!delivery) {
        return res.status(404).json({
          success: false,
          message: "Entrega não encontrada"
        });
      }

      if (delivery.receiver.toString() !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Não autorizado"
        });
      }

      delivery.status = "cancelled";
      await delivery.save();

      await Donation.findByIdAndUpdate(delivery.donation, {
        status: "available",
      });

      return res.status(200).json({
        success: true,
        message: "Entrega cancelada"
      });

    } catch (error) {
      next(error);
    }
  }
}

export default new DeliveryController();