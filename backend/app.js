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
app.use(cors());
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
// ROTAS DA API
// ===============================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/deliveries", deliveryRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/config", configRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/families", familyRoutes);
app.use("/api/ngos", ngoRoutes);

// ===============================
// ROTA 404
// ===============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Rota não encontrada",
  });
});

export default app;