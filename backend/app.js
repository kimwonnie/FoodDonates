import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// ROTAS
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import configRoutes from "./routes/configRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import familyRoutes from "./routes/familyRoutes.js";
import ngoRoutes from "./routes/ngoRoutes.js";

const app = express();

// ===============================
// Middlewares globais
// ===============================
app.use(cors({
  origin: ["http://localhost:3000", "https://seu-frontend.com"], // ajuste conforme seu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// ===============================
// ROTA BASE
// ===============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Plataforma Solidária",
    version: "1.0.0",
  });
});

// ===============================
// ROTAS DA API (prefixadas com v1)
// ===============================
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/donations", donationRoutes);
app.use("/api/v1/deliveries", deliveryRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/reports", reportRoutes);
app.use("/api/v1/config", configRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/families", familyRoutes);
app.use("/api/v1/ngos", ngoRoutes);

// ===============================
// ROTA 404
// ===============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Rota não encontrada",
  });
});

// ===============================
// Middleware de erro global
// ===============================
app.use((err, req, res, next) => {
  console.error("❌ Erro inesperado:", err);
  res.status(500).json({
    success: false,
    message: "Erro interno no servidor",
  });
});

export default app;
