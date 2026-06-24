import Donation from "../models/Donation.js";

class DonationController {

  // ===============================
  // Criar doação
  // ===============================
  async createDonation(req, res, next) {
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

      return res.status(201).json({
        success: true,
        message: "Doação criada com sucesso",
        data: donation,
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Listar doações
  // ===============================
  async getAllDonations(req, res, next) {
    try {
      const donations = await Donation.find({ status: "available" })
        .populate("donor", "name email")
        .sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        data: donations,
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Buscar por ID
  // ===============================
  async getDonationById(req, res, next) {
    try {
      const donation = await Donation.findById(req.params.id)
        .populate("donor", "name email");

      if (!donation) {
        return res.status(404).json({
          success: false,
          message: "Doação não encontrada",
        });
      }

      return res.status(200).json({
        success: true,
        data: donation,
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Atualizar
  // ===============================
  async updateDonation(req, res, next) {
    try {
      const donation = await Donation.findById(req.params.id);

      if (!donation) {
        return res.status(404).json({
          success: false,
          message: "Doação não encontrada",
        });
      }

      if (donation.donor.toString() !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Não autorizado",
        });
      }

      const updated = await Donation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      return res.status(200).json({
        success: true,
        message: "Doação atualizada",
        data: updated,
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Deletar
  // ===============================
  async deleteDonation(req, res, next) {
    try {
      const donation = await Donation.findById(req.params.id);

      if (!donation) {
        return res.status(404).json({
          success: false,
          message: "Doação não encontrada",
        });
      }

      if (donation.donor.toString() !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Não autorizado",
        });
      }

      await donation.deleteOne();

      return res.status(200).json({
        success: true,
        message: "Doação removida com sucesso",
      });

    } catch (error) {
      next(error);
    }
  }
}

export default new DonationController();