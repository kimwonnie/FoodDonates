import User from "../models/User.js";
import Donation from "../models/Donation.js";
import Delivery from "../models/Delivery.js";

class ReportController {

  // ===============================
  // RELATÓRIO GERAL
  // ===============================
  async getSystemReport(req, res, next) {
    try {
      const totalUsers = await User.countDocuments();
      const totalDonations = await Donation.countDocuments();
      const totalDeliveries = await Delivery.countDocuments();

      const activeDonations = await Donation.countDocuments({ status: "available" });
      const reservedDonations = await Donation.countDocuments({ status: "reserved" });
      const deliveredDonations = await Donation.countDocuments({ status: "delivered" });

      const pendingDeliveries = await Delivery.countDocuments({ status: "pending" });
      const completedDeliveries = await Delivery.countDocuments({ status: "completed" });
      const cancelledDeliveries = await Delivery.countDocuments({ status: "cancelled" });

      return res.status(200).json({
        success: true,
        overview: {
          users: totalUsers,
          donations: totalDonations,
          deliveries: totalDeliveries,
        },
        donations: {
          available: activeDonations,
          reserved: reservedDonations,
          delivered: deliveredDonations,
        },
        deliveries: {
          pending: pendingDeliveries,
          completed: completedDeliveries,
          cancelled: cancelledDeliveries,
        },
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // ATIVIDADE RECENTE
  // ===============================
  async getRecentActivityReport(req, res, next) {
    try {
      const recentDonations = await Donation.find()
        .populate("donor", "name email")
        .sort({ createdAt: -1 })
        .limit(10);

      const recentDeliveries = await Delivery.find()
        .populate("donor", "name email")
        .populate("receiver", "name email")
        .populate("donation")
        .sort({ createdAt: -1 })
        .limit(10);

      return res.status(200).json({
        success: true,
        recentDonations,
        recentDeliveries,
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // PERFORMANCE
  // ===============================
  async getPerformanceReport(req, res, next) {
    try {
      const totalDeliveries = await Delivery.countDocuments();
      const completed = await Delivery.countDocuments({ status: "completed" });

      const deliveryRate =
        totalDeliveries > 0 ? (completed / totalDeliveries) * 100 : 0;

      const totalDonations = await Donation.countDocuments();
      const delivered = await Donation.countDocuments({ status: "delivered" });

      const donationRate =
        totalDonations > 0 ? (delivered / totalDonations) * 100 : 0;

      return res.status(200).json({
        success: true,
        deliveryPerformance: {
          total: totalDeliveries,
          completed,
          successRate: deliveryRate.toFixed(2),
        },
        donationPerformance: {
          total: totalDonations,
          delivered,
          successRate: donationRate.toFixed(2),
        },
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // RELATÓRIO POR DATA
  // ===============================
  async getReportByDateRange(req, res, next) {
    try {
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        return res.status(400).json({
          success: false,
          message: "startDate e endDate são obrigatórios"
        });
      }

      const donations = await Donation.find({
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      });

      const deliveries = await Delivery.find({
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      });

      return res.status(200).json({
        success: true,
        period: { startDate, endDate },
        donations: donations.length,
        deliveries: deliveries.length,
        donationList: donations,
        deliveryList: deliveries,
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // EXPORT
  // ===============================
  async exportBasicReport(req, res, next) {
    try {
      const donations = await Donation.find().limit(100);
      const deliveries = await Delivery.find().limit(100);

      return res.status(200).json({
        success: true,
        exportedAt: new Date(),
        donations,
        deliveries,
      });

    } catch (error) {
      next(error);
    }
  }
}

export default new ReportController();