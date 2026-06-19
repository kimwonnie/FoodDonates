import { useEffect, useState } from "react";

const DashboardAdmin = () => {

  const [data, setData] = useState({
    usuarios: 0,
    familias: 0,
    ongs: 0,
    doacoes: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔌 backend ready (KPIs)
      const response = await fetch("http://localhost:3000/admin/dashboard");

      if (!response.ok) {
        throw new Error("Erro ao carregar dashboard");
      }

      const result = await response.json();

      setData(result);

    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar o dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) return <p>Carregando painel administrativo...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>

      <h1>Painel Administrativo</h1>

      <hr />

      <div className="dashboard-grid">

        <div className="card">
          <h3>Usuários</h3>
          <p>{data.usuarios}</p>
        </div>

        <div className="card">
          <h3>Famílias</h3>
          <p>{data.familias}</p>
        </div>

        <div className="card">
          <h3>ONGs</h3>
          <p>{data.ongs}</p>
        </div>

        <div className="card">
          <h3>Doações</h3>
          <p>{data.doacoes}</p>
        </div>

      </div>

    </div>
  );
};

export default DashboardAdmin;