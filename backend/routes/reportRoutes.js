import User from "../models/User.js";
import Donation from "../models/Donation.js";
import Delivery from "../models/Delivery.js";

class ReportController {

  async getSystemReport(req, res) {
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

      res.status(200).json({
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
      res.status(500).json({
        message: "Erro ao gerar relatório do sistema",
        error: error.message,
      });
    }
  }

  async getRecentActivityReport(req, res) { /* igual seu código */ }

  async getPerformanceReport(req, res) { /* igual seu código */ }

  async getReportByDateRange(req, res) { /* igual seu código */ }

  async exportBasicReport(req, res) { /* igual seu código */ }
}

export default new ReportController();