import { useEffect, useState } from "react";

const DeliveryReport = () => {

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReport = async () => {
    try {
      setLoading(true);

      // 🔌 endpoint padrão de relatório
      const response = await fetch("http://localhost:3000/reports/deliveries");

      if (!response.ok) {
        throw new Error("Erro ao buscar relatório de entregas");
      }

      const data = await response.json();

      setReport(data);

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar relatório de entregas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  if (loading) return <p>Carregando relatório...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!report) return <p>Nenhum dado encontrado</p>;

  return (
    <div>

      <h1>Relatório de Entregas</h1>

      <hr />

      <p>
        <strong>Entregas Realizadas:</strong>{" "}
        {report.entregasRealizadas}
      </p>

      <p>
        <strong>Entregas Pendentes:</strong>{" "}
        {report.entregasPendentes}
      </p>

    </div>
  );
};

export default DeliveryReport;