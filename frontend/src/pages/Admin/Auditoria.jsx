import { useEffect, useState } from "react";

const Auditoria = () => {

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLogs = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔌 backend ready (admin audit logs)
      const response = await fetch("http://localhost:3000/admin/auditoria");

      if (!response.ok) {
        throw new Error("Erro ao buscar auditoria");
      }

      const data = await response.json();

      setLogs(data);

    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar a auditoria");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  if (loading) return <p>Carregando auditoria...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!logs.length) return <p>Nenhum registro encontrado</p>;

  return (
    <div>

      <h1>Auditoria do Sistema</h1>

      <hr />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>

        <thead>

          <tr>
            <th>Evento</th>
            <th>Usuário</th>
            <th>Data</th>
          </tr>

        </thead>

        <tbody>

          {logs.map((item, index) => (
            <tr key={index}>

              <td>{item.evento}</td>

              <td>{item.usuario}</td>

              <td>{item.data}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Auditoria;