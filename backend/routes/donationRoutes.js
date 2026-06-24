import Donation from "../models/Donation.js";
import logService from "../services/logService.js";

class DonationController {

  async createDonation(req, res, next) {
    try {
      const { foodName, quantity, expirationDate, location } = req.body;

      const donation = await Donation.create({
        foodName,
        quantity,
        expirationDate,
        location,
        donor: req.user.id,
        status: "available"
      });

      await logService.info(
        "DonationController",
        "Doação criada",
        { donationId: donation._id }
      );

      res.status(201).json({
        success: true,
        data: donation
      });

    } catch (error) {
      next(error);
    }
  }

  async getAllDonations(req, res, next) {
    try {
      const donations = await Donation.find({ status: "available" })
        .populate("donor", "nome email")
        .sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        data: donations
      });

    } catch (error) {
      next(error);
    }
  }

  async getDonationById(req, res, next) {
    try {
      const donation = await Donation.findById(req.params.id)
        .populate("donor", "nome email");

      if (!donation) {
        return res.status(404).json({
          success: false,
          message: "Doação não encontrada"
        });
      }

      res.status(200).json({
        success: true,
        data: donation
      });

    } catch (error) {
      next(error);
    }
  }

  async updateDonation(req, res, next) {
    try {
      const donation = await Donation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!donation) {
        return res.status(404).json({
          success: false,
          message: "Doação não encontrada"
        });
      }

      res.status(200).json({
        success: true,
        data: donation
      });

    } catch (error) {
      next(error);
    }
  }

  async deleteDonation(req, res, next) {
    try {
      const donation = await Donation.findByIdAndDelete(req.params.id);

      if (!donation) {
        return res.status(404).json({
          success: false,
          message: "Doação não encontrada"
        });
      }

      res.status(200).json({
        success: true,
        message: "Doação removida"
      });

    } catch (error) {
      next(error);
    }
  }
}

export default new DonationController();