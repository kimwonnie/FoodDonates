import { useState } from "react";

const BackupSettings = () => {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBackup = async () => {
    try {
      setLoading(true);
      setMessage("");

      // 🔌 pronto para backend
      const response = await fetch("http://localhost:3000/settings/backup", {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Erro ao realizar backup");
      }

      setMessage("Backup realizado com sucesso!");

    } catch (error) {
      console.error(error);
      setMessage("Erro ao realizar backup");
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    try {
      setLoading(true);
      setMessage("");

      // 🔌 pronto para backend
      const response = await fetch("http://localhost:3000/settings/restore", {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Erro ao restaurar backup");
      }

      setMessage("Backup restaurado com sucesso!");

    } catch (error) {
      console.error(error);
      setMessage("Erro ao restaurar backup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      <h1>Backup do Sistema</h1>

      <hr />

      <button onClick={handleBackup} disabled={loading}>
        {loading ? "Processando..." : "Realizar Backup"}
      </button>

      {" "}

      <button onClick={handleRestore} disabled={loading}>
        {loading ? "Processando..." : "Restaurar Backup"}
      </button>

      {message && (
        <p style={{ marginTop: "15px" }}>
          {message}
        </p>
      )}

    </div>
  );
};

export default BackupSettings;