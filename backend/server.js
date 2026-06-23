import app from "./app.js";
import connectDB from "./config/database.js";
import env from "./config/env.js";

// ===============================
// Conexão com banco
// ===============================
connectDB()
  .then(() => {
    console.log("📦 MongoDB conectado com sucesso");
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar no MongoDB:", err.message);
    process.exit(1);
  });

// ===============================
// Start do servidor
// ===============================
const PORT = env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📡 Acesse: http://localhost:${PORT}`);
});