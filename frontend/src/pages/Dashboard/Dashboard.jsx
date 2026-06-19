import { useEffect, useState } from "react";
import DashboardCard from "../../components/Cards/DashboardCard";

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    foodTypes: 0,
    stock: 0,
    expiringFoods: 0,
    families: 0,
    deliveries: 0,
    ngos: 0
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = async () => {

    try {
      setLoading(true);
      setError("");

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/dashboard");

      if (!response.ok) {
        throw new Error("Erro ao carregar dashboard");
      }

      const data = await response.json();

      setDashboardData(data.metrics || dashboardData);
      setRecentActivities(data.recentActivities || []);
      setAlerts(data.alerts || []);

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

  if (loading) return <p>Carregando dashboard...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>

      <h1>Dashboard</h1>

      <p>Bem-vindo à Plataforma Solidária</p>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px"
        }}
      >

        <DashboardCard
          title="Tipos de Alimentos"
          value={dashboardData.foodTypes}
          icon="🍚"
        />

        <DashboardCard
          title="Estoque Atual (Kg)"
          value={dashboardData.stock}
          icon="🥫"
        />

        <DashboardCard
          title="Próximos da Validade"
          value={dashboardData.expiringFoods}
          icon="⚠️"
        />

        <DashboardCard
          title="Famílias Atendidas"
          value={dashboardData.families}
          icon="👨‍👩‍👧‍👦"
        />

        <DashboardCard
          title="Entregas Realizadas"
          value={dashboardData.deliveries}
          icon="🚚"
        />

        <DashboardCard
          title="ONGs Parceiras"
          value={dashboardData.ngos}
          icon="🏢"
        />

      </div>

      {/* ALERTAS */}
      <div style={{ marginTop: "40px" }}>

        <h2>Alertas</h2>

        {alerts.length === 0 ? (
          <p>Nenhum alerta no momento</p>
        ) : (
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        )}

      </div>

      {/* ATIVIDADES */}
      <div style={{ marginTop: "40px" }}>

        <h2>Atividades Recentes</h2>

        {recentActivities.length === 0 ? (
          <p>Nenhuma atividade recente</p>
        ) : (
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        )}

      </div>

    </div>
  );
};

export default Dashboard;