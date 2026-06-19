import { useEffect, useState } from "react";

const DonationReport = () => {

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReport = async () => {
    try {
      setLoading(true);

      // 🔌 pronto para backend
      const response = await fetch("http://localhost:3000/reports/donations");

      if (!response.ok) {
        throw new Error("Erro ao buscar relatório de doações");
      }

      const data = await response.json();

      setReport(data);

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar relatório de doações");
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

      <h1>Relatório de Doações</h1>

      <hr />

      <h3>
        Total de Doações: {" "}
        {report.totalDoacoes}
      </h3>

      <h3>
        Total Distribuído: {" "}
        {report.totalKg} Kg
      </h3>

      <hr />

      <h2>Alimentos Distribuídos</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >

        <thead>

          <tr>
            <th>Alimento</th>
            <th>Quantidade</th>
          </tr>

        </thead>

        <tbody>

          {report.alimentos.map((item, index) => (

            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidade} Kg</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DonationReport;