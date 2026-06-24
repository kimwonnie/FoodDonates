import User from "../models/User.js";
import Donation from "../models/Donation.js";
import Delivery from "../models/Delivery.js";

class DashboardController {

  // ===============================
  // KPIs gerais
  // ===============================
  async getDashboardMetrics(req, res, next) {
    try {
      const totalUsers = await User.countDocuments();

      const totalDonations = await Donation.countDocuments();
      const availableDonations = await Donation.countDocuments({ status: "available" });
      const reservedDonations = await Donation.countDocuments({ status: "reserved" });
      const deliveredDonations = await Donation.countDocuments({ status: "delivered" });

      const totalDeliveries = await Delivery.countDocuments();
      const pendingDeliveries = await Delivery.countDocuments({ status: "pending" });
      const completedDeliveries = await Delivery.countDocuments({ status: "completed" });
      const cancelledDeliveries = await Delivery.countDocuments({ status: "cancelled" });

      return res.status(200).json({
        users: {
          total: totalUsers
        },
        donations: {
          total: totalDonations,
          available: availableDonations,
          reserved: reservedDonations,
          delivered: deliveredDonations
        },
        deliveries: {
          total: totalDeliveries,
          pending: pendingDeliveries,
          completed: completedDeliveries,
          cancelled: cancelledDeliveries
        }
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Doações por status (gráfico)
  // ===============================
  async getDonationStatusChart(req, res, next) {
    try {
      const available = await Donation.countDocuments({ status: "available" });
      const reserved = await Donation.countDocuments({ status: "reserved" });
      const delivered = await Donation.countDocuments({ status: "delivered" });

      return res.status(200).json({
        labels: ["Disponíveis", "Reservadas", "Entregues"],
        data: [available, reserved, delivered]
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Entregas por status (gráfico)
  // ===============================
  async getDeliveryStatusChart(req, res, next) {
    try {
      const pending = await Delivery.countDocuments({ status: "pending" });
      const completed = await Delivery.countDocuments({ status: "completed" });
      const cancelled = await Delivery.countDocuments({ status: "cancelled" });

      return res.status(200).json({
        labels: ["Pendentes", "Concluídas", "Canceladas"],
        data: [pending, completed, cancelled]
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Crescimento de usuários
  // ===============================
  async getUserGrowthChart(req, res, next) {
    try {
      const users = await User.find({}, { createdAt: 1 });

      const grouped = {};

      users.forEach((user) => {
        const date = new Date(user.createdAt);
        const key = `${date.getMonth() + 1}/${date.getFullYear()}`;

        grouped[key] = (grouped[key] || 0) + 1;
      });

      return res.status(200).json({
        labels: Object.keys(grouped),
        data: Object.values(grouped)
      });

    } catch (error) {
      next(error);
    }
  }

  // ===============================
  // Resumo rápido (home)
  // ===============================
  async getQuickSummary(req, res, next) {
    try {
      const activeDonations = await Donation.countDocuments({ status: "available" });
      const activeDeliveries = await Delivery.countDocuments({ status: "pending" });
      const totalCompleted = await Delivery.countDocuments({ status: "completed" });

      return res.status(200).json({
        activeDonations,
        activeDeliveries,
        totalCompleted
      });

    } catch (error) {
      next(error);
    }
  }
}

export default new DashboardController();