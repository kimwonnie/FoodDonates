import app from "./app.js";
import connectDB from "./config/database.js";
import env from "./config/env.js";

// ===============================
// START SEGURO DO SERVIDOR
// ===============================
const startServer = async () => {
  try {
    // conecta banco primeiro
    await connectDB();
    console.log("📦 MongoDB conectado com sucesso");

    const PORT = env.PORT || 3000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log(`📡 http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("❌ Erro ao iniciar servidor:", err.message);
    process.exit(1);
  }
};

startServer();