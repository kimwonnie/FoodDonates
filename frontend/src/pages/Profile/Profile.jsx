import { useEffect, useState } from "react";

const Profile = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔐 FUTURO PADRÃO REAL (JWT)
      // const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar perfil");
      }

      const data = await response.json();

      setUser(data);

    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar o perfil do usuário");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <p>Carregando perfil...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!user) {
    return <p>Perfil não encontrado</p>;
  }

  return (
    <div>

      <h1>Meu Perfil</h1>

      <hr />

      <div className="profile-card">

        <div className="profile-avatar">

          <img
            src={user.avatar || "/avatar.png"}
            alt="Avatar do usuário"
            width="120"
          />

        </div>

        <div>

          <p>
            <strong>Nome:</strong> {user.nome}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Telefone:</strong> {user.telefone || "Não informado"}
          </p>

          <p>
            <strong>Perfil:</strong> {user.perfil}
          </p>

          <p>
            <strong>Status:</strong> {user.status}
          </p>

        </div>

      </div>

    </div>
  );
};

export default Profile;