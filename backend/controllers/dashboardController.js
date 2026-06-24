import User from "../models/User.js";
import Donation from "../models/Donation.js";
import Delivery from "../models/Delivery.js";

class DashboardController {

  // ===============================
  // KPIs gerais
  // ===============================
  async getDashboardMetrics(req, res) {
    try {
      const totalUsers = await User.countDocuments();
      const totalDonations = await Donation.countDocuments();
      const availableDonations = await Donation.countDocuments({ status: "available" });
      const deliveredDonations = await Donation.countDocuments({ status: "delivered" });

      const totalDeliveries = await Delivery.countDocuments();
      const completedDeliveries = await Delivery.countDocuments({ status: "completed" });
      const pendingDeliveries = await Delivery.countDocuments({ status: "pending" });

      return res.status(200).json({
        users: {
          total: totalUsers,
        },
        donations: {
          total: totalDonations,
          available: availableDonations,
          delivered: deliveredDonations,
        },
        deliveries: {
          total: totalDeliveries,
          completed: completedDeliveries,
          pending: pendingDeliveries,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao carregar dashboard",
        error: error.message,
      });
    }
  }

  // ===============================
  // Gráfico: status das doações
  // ===============================
  async getDonationStatusChart(req, res) {
    try {
      const available = await Donation.countDocuments({ status: "available" });
      const reserved = await Donation.countDocuments({ status: "reserved" });
      const delivered = await Donation.countDocuments({ status: "delivered" });

      return res.status(200).json({
        labels: ["Disponíveis", "Reservadas", "Entregues"],
        data: [available, reserved, delivered],
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao gerar gráfico de doações",
        error: error.message,
      });
    }
  }

  // ===============================
  // Gráfico: entregas
  // ===============================
  async getDeliveryStatusChart(req, res) {
    try {
      const pending = await Delivery.countDocuments({ status: "pending" });
      const completed = await Delivery.countDocuments({ status: "completed" });
      const cancelled = await Delivery.countDocuments({ status: "cancelled" });

      return res.status(200).json({
        labels: ["Pendentes", "Concluídas", "Canceladas"],
        data: [pending, completed, cancelled],
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao gerar gráfico de entregas",
        error: error.message,
      });
    }
  }

  // ===============================
  // Crescimento de usuários
  // ===============================
  async getUserGrowthChart(req, res) {
    try {
      const users = await User.find({}, { createdAt: 1 });

      const grouped = {};

      users.forEach((user) => {
        const date = new Date(user.createdAt);
        const month = `${date.getMonth() + 1}/${date.getFullYear()}`;

        grouped[month] = (grouped[month] || 0) + 1;
      });

      return res.status(200).json({
        labels: Object.keys(grouped),
        data: Object.values(grouped),
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao gerar gráfico de crescimento",
        error: error.message,
      });
    }
  }

  // ===============================
  // Resumo rápido
  // ===============================
  async getQuickSummary(req, res) {
    try {
      return res.status(200).json({
        activeDonations: await Donation.countDocuments({ status: "available" }),
        activeDeliveries: await Delivery.countDocuments({ status: "pending" }),
        totalCompleted: await Delivery.countDocuments({ status: "completed" }),
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao gerar resumo",
        error: error.message,
      });
    }
  }
}

export default new DashboardController();