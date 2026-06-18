import DashboardCard from "../../components/Cards/DashboardCard";

const Dashboard = () => {

  const dashboardData = {

    foodTypes: 15,
    stock: 4250,
    expiringFoods: 8,
    families: 245,
    deliveries: 987,
    ngos: 18

  };

  const recentActivities = [

    "Novo lote de Arroz cadastrado",
    "Entrega realizada para Família Silva",
    "Alimento próximo da validade identificado",
    "Nova ONG parceira cadastrada",
    "Nova doação recebida"

  ];

  const alerts = [

    "⚠ 8 lotes vencem nos próximos 30 dias",
    "⚠ Estoque de Feijão abaixo do mínimo",
    "⚠ 12 famílias aguardando entrega"

  ];

  return (

    <div>

      <h1>Dashboard</h1>

      <p>
        Bem-vindo à Plataforma Solidária
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
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

      <div
        style={{
          marginTop: "40px"
        }}
      >

        <h2>Alertas</h2>

        <ul>

          {alerts.map((alert, index) => (

            <li key={index}>
              {alert}
            </li>

          ))}

        </ul>

      </div>

      {/* ATIVIDADES */}

      <div
        style={{
          marginTop: "40px"
        }}
      >

        <h2>Atividades Recentes</h2>

        <ul>

          {recentActivities.map(
            (activity, index) => (

              <li key={index}>
                {activity}
              </li>

            )
          )}

        </ul>

      </div>

    </div>

  );

};

export default Dashboard;