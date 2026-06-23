const User = require("../models/User");
const Donation = require("../models/Donation");
const Delivery = require("../models/Delivery");

// ===============================
// Relatório geral do sistema
// ===============================
exports.getSystemReport = async (req, res) => {
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
};

// ===============================
// Relatório de atividades recentes
// ===============================
exports.getRecentActivityReport = async (req, res) => {
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

    res.status(200).json({
      recentDonations,
      recentDeliveries,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao gerar relatório de atividades",
      error: error.message,
    });
  }
};

// ===============================
// Relatório de performance (eficiência)
// ===============================
exports.getPerformanceReport = async (req, res) => {
  try {
    const totalDeliveries = await Delivery.countDocuments();
    const completed = await Delivery.countDocuments({ status: "completed" });

    const successRate =
      totalDeliveries > 0 ? (completed / totalDeliveries) * 100 : 0;

    const totalDonations = await Donation.countDocuments();
    const deliveredDonations = await Donation.countDocuments({
      status: "delivered",
    });

    const donationSuccessRate =
      totalDonations > 0 ? (deliveredDonations / totalDonations) * 100 : 0;

    res.status(200).json({
      deliveryPerformance: {
        total: totalDeliveries,
        completed,
        successRate: successRate.toFixed(2),
      },
      donationPerformance: {
        total: totalDonations,
        delivered: deliveredDonations,
        successRate: donationSuccessRate.toFixed(2),
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao gerar relatório de performance",
      error: error.message,
    });
  }
};

// ===============================
// Relatório por período (base simples)
// ===============================
exports.getReportByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

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

    res.status(200).json({
      period: {
        startDate,
        endDate,
      },
      donations: donations.length,
      deliveries: deliveries.length,
      donationList: donations,
      deliveryList: deliveries,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao gerar relatório por período",
      error: error.message,
    });
  }
};

// ===============================
// Export simples (estrutura para CSV/Excel futuro)
// ===============================
exports.exportBasicReport = async (req, res) => {
  try {
    const donations = await Donation.find().limit(100);
    const deliveries = await Delivery.find().limit(100);

    const exportData = {
      donations,
      deliveries,
      exportedAt: new Date(),
    };

    res.status(200).json(exportData);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao exportar relatório",
      error: error.message,
    });
  }
};