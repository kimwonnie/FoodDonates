import User from "../models/User.js";
import Donation from "../models/Donation.js";
import Delivery from "../models/Delivery.js";

class DashboardController {

  async getDashboardMetrics(req, res) {
    try {
      const totalUsers = await User.countDocuments();
      const totalDonations = await Donation.countDocuments();
      const availableDonations = await Donation.countDocuments({ status: "available" });
      const deliveredDonations = await Donation.countDocuments({ status: "delivered" });

      const totalDeliveries = await Delivery.countDocuments();
      const completedDeliveries = await Delivery.countDocuments({ status: "completed" });
      const pendingDeliveries = await Delivery.countDocuments({ status: "pending" });

      res.status(200).json({
        users: { total: totalUsers },
        donations: {
          total: totalDonations,
          available: availableDonations,
          delivered: deliveredDonations
        },
        deliveries: {
          total: totalDeliveries,
          completed: completedDeliveries,
          pending: pendingDeliveries
        }
      });
    } catch (error) {
      res.status(500).json({
        message: "Erro ao carregar dashboard",
        error: error.message
      });
    }
  }

  async getDonationStatusChart(req, res) {
    try {
      const available = await Donation.countDocuments({ status: "available" });
      const reserved = await Donation.countDocuments({ status: "reserved" });
      const delivered = await Donation.countDocuments({ status: "delivered" });

      res.json({
        labels: ["Disponíveis", "Reservadas", "Entregues"],
        data: [available, reserved, delivered]
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getDeliveryStatusChart(req, res) {
    try {
      const pending = await Delivery.countDocuments({ status: "pending" });
      const completed = await Delivery.countDocuments({ status: "completed" });
      const cancelled = await Delivery.countDocuments({ status: "cancelled" });

      res.json({
        labels: ["Pendentes", "Concluídas", "Canceladas"],
        data: [pending, completed, cancelled]
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserGrowthChart(req, res) {
    try {
      const users = await User.find({}, { createdAt: 1 });

      const grouped = {};

      users.forEach((u) => {
        const d = new Date(u.createdAt);
        const key = `${d.getMonth() + 1}/${d.getFullYear()}`;
        grouped[key] = (grouped[key] || 0) + 1;
      });

      res.json({
        labels: Object.keys(grouped),
        data: Object.values(grouped)
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getQuickSummary(req, res) {
    try {
      res.json({
        activeDonations: await Donation.countDocuments({ status: "available" }),
        activeDeliveries: await Delivery.countDocuments({ status: "pending" }),
        totalCompleted: await Delivery.countDocuments({ status: "completed" })
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new DashboardController();