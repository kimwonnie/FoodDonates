import { useEffect, useState } from "react";

const LoginHistory = () => {

  const [logins, setLogins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLogins = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/profile/login-history");

      if (!response.ok) {
        throw new Error("Erro ao buscar histórico de login");
      }

      const data = await response.json();

      setLogins(data);

    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar o histórico de login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogins();
  }, []);

  if (loading) return <p>Carregando histórico de login...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!logins.length) return <p>Nenhum login encontrado</p>;

  return (
    <div>

      <h1>Histórico de Login</h1>

      <hr />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>

        <thead>

          <tr>
            <th>Data</th>
            <th>IP</th>
            <th>Dispositivo</th>
          </tr>

        </thead>

        <tbody>

          {logins.map((login, index) => (
            <tr key={index}>

              <td>{login.data}</td>

              <td>{login.ip}</td>

              <td>{login.dispositivo}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default LoginHistory;