const User = require("../models/User");
const Donation = require("../models/Donation");
const Delivery = require("../models/Delivery");

// ===============================
// Dashboard geral (KPIs + resumo)
// ===============================
exports.getDashboardMetrics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalDonations = await Donation.countDocuments();
    const availableDonations = await Donation.countDocuments({ status: "available" });
    const deliveredDonations = await Donation.countDocuments({ status: "delivered" });

    const totalDeliveries = await Delivery.countDocuments();
    const completedDeliveries = await Delivery.countDocuments({ status: "completed" });
    const pendingDeliveries = await Delivery.countDocuments({ status: "pending" });

    res.status(200).json({
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
    res.status(500).json({
      message: "Erro ao carregar dashboard",
      error: error.message,
    });
  }
};

// ===============================
// Gráfico: status das doações
// ===============================
exports.getDonationStatusChart = async (req, res) => {
  try {
    const available = await Donation.countDocuments({ status: "available" });
    const reserved = await Donation.countDocuments({ status: "reserved" });
    const delivered = await Donation.countDocuments({ status: "delivered" });

    const chartData = {
      labels: ["Disponíveis", "Reservadas", "Entregues"],
      data: [available, reserved, delivered],
    };

    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao gerar gráfico de doações",
      error: error.message,
    });
  }
};

// ===============================
// Gráfico: entregas por status
// ===============================
exports.getDeliveryStatusChart = async (req, res) => {
  try {
    const pending = await Delivery.countDocuments({ status: "pending" });
    const completed = await Delivery.countDocuments({ status: "completed" });
    const cancelled = await Delivery.countDocuments({ status: "cancelled" });

    const chartData = {
      labels: ["Pendentes", "Concluídas", "Canceladas"],
      data: [pending, completed, cancelled],
    };

    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao gerar gráfico de entregas",
      error: error.message,
    });
  }
};

// ===============================
// Gráfico: crescimento (últimos usuários)
// ===============================
exports.getUserGrowthChart = async (req, res) => {
  try {
    const users = await User.find({}, { createdAt: 1 });

    const grouped = {};

    users.forEach((user) => {
      const date = new Date(user.createdAt);
      const month = `${date.getMonth() + 1}/${date.getFullYear()}`;

      grouped[month] = (grouped[month] || 0) + 1;
    });

    const labels = Object.keys(grouped);
    const data = Object.values(grouped);

    res.status(200).json({
      labels,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao gerar gráfico de crescimento",
      error: error.message,
    });
  }
};

// ===============================
// Resumo rápido para home dashboard
// ===============================
exports.getQuickSummary = async (req, res) => {
  try {
    const summary = {
      activeDonations: await Donation.countDocuments({ status: "available" }),
      activeDeliveries: await Delivery.countDocuments({ status: "pending" }),
      totalCompleted: await Delivery.countDocuments({ status: "completed" }),
    };

    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao gerar resumo",
      error: error.message,
    });
  }
};