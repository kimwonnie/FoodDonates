import { useEffect, useState } from "react";

const Monitoramento = () => {

  const [data, setData] = useState({
    usuariosOnline: 0,
    sessoesAtivas: 0,
    requisicoesHoje: 0,
    disponibilidade: "0%"
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMonitoramento = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔌 backend ready (system monitoring)
      const response = await fetch("http://localhost:3000/admin/monitoramento");

      if (!response.ok) {
        throw new Error("Erro ao buscar monitoramento");
      }

      const result = await response.json();

      setData(result);

    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar o monitoramento");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonitoramento();

    // 🔄 simula atualização em tempo real (opcional backend-ready)
    const interval = setInterval(fetchMonitoramento, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Carregando monitoramento...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>

      <h1>Monitoramento do Sistema</h1>

      <hr />

      <p>
        Usuários Online: {data.usuariosOnline}
      </p>

      <p>
        Sessões Ativas: {data.sessoesAtivas}
      </p>

      <p>
        Requisições Hoje: {data.requisicoesHoje}
      </p>

      <p>
        Disponibilidade: {data.disponibilidade}
      </p>

    </div>
  );
};

export default Monitoramento;