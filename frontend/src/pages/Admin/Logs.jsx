import { useEffect, useState } from "react";

const Logs = () => {

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLogs = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/admin/logs");

      if (!response.ok) {
        throw new Error("Erro ao buscar logs do sistema");
      }

      const data = await response.json();

      setLogs(data);

    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar os logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  if (loading) return <p>Carregando logs...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!logs.length) return <p>Nenhum log encontrado</p>;

  return (
    <div>

      <h1>Logs do Sistema</h1>

      <hr />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>

        <thead>

          <tr>
            <th>Usuário</th>
            <th>Ação</th>
            <th>Data</th>
          </tr>

        </thead>

        <tbody>

          {logs.map((log, index) => (
            <tr key={index}>

              <td>{log.usuario}</td>

              <td>{log.acao}</td>

              <td>{log.data}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Logs;