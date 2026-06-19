import { useEffect, useState } from "react";

const FamilyReport = () => {

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReport = async () => {
    try {
      setLoading(true);

      // 🔌 pronto para backend
      const response = await fetch("http://localhost:3000/reports/families");

      if (!response.ok) {
        throw new Error("Erro ao buscar relatório de famílias");
      }

      const data = await response.json();

      setReport(data);

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar relatório de famílias");
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

      <h1>Relatório de Famílias</h1>

      <hr />

      <p>
        <strong>Famílias Atendidas:</strong>{" "}
        {report.familiasAtendidas}
      </p>

      <p>
        <strong>Famílias Pendentes:</strong>{" "}
        {report.familiasPendentes}
      </p>

    </div>
  );
};

export default FamilyReport;