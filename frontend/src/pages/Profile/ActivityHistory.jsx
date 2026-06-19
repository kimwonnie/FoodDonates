import { useEffect, useState } from "react";

const ActivityHistory = () => {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchActivities = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/profile/activities");

      if (!response.ok) {
        throw new Error("Erro ao buscar histórico de atividades");
      }

      const data = await response.json();

      setActivities(data);

    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar o histórico");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  if (loading) return <p>Carregando atividades...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!activities.length) return <p>Nenhuma atividade encontrada</p>;

  return (
    <div>

      <h1>Histórico de Atividades</h1>

      <hr />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>

        <thead>

          <tr>
            <th>Data</th>
            <th>Ação</th>
          </tr>

        </thead>

        <tbody>

          {activities.map((activity, index) => (
            <tr key={index}>

              <td>{activity.data}</td>

              <td>{activity.acao}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ActivityHistory;