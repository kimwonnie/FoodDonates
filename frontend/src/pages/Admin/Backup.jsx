import { useState } from "react";

const Backup = () => {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleAction = async (endpoint, successMessage) => {
    try {
      setLoading(true);
      setMessage("");
      setError("");

      // 🔌 backend ready
      const response = await fetch(`http://localhost:3000/admin/${endpoint}`, {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Erro na operação");
      }

      setMessage(successMessage);

    } catch (err) {
      console.error(err);
      setError("Não foi possível executar a operação");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      <h1>Backup do Sistema</h1>

      <hr />

      <button
        onClick={() => handleAction("backup", "Backup gerado com sucesso!")}
        disabled={loading}
      >
        {loading ? "Processando..." : "Gerar Backup"}
      </button>

      {" "}

      <button
        onClick={() => handleAction("restore", "Backup restaurado com sucesso!")}
        disabled={loading}
      >
        {loading ? "Processando..." : "Restaurar Backup"}
      </button>

      {" "}

      <button
        onClick={() => handleAction("export", "Dados exportados com sucesso!")}
        disabled={loading}
      >
        {loading ? "Processando..." : "Exportar Dados"}
      </button>

      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {message}
        </p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

    </div>
  );
};

export default Backup;