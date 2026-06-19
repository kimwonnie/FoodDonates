import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {

  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:3000/users/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar usuário");
      }

      const data = await response.json();

      setUser(data);

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar usuário");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (loading) return <p>Carregando usuário...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!user) return <p>Usuário não encontrado</p>;

  return (
    <div>

      <h1>Visualizar Usuário</h1>

      <hr />

      <h2>Informações Pessoais</h2>

      <p>
        <strong>Nome:</strong> {user.nome}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <hr />

      <h2>Dados do Sistema</h2>

      <p>
        <strong>Perfil:</strong> {user.perfil}
      </p>

      <p>
        <strong>Status:</strong> {user.status}
      </p>

      {user.telefone && (
        <p>
          <strong>Telefone:</strong> {user.telefone}
        </p>
      )}

    </div>
  );
};

export default ViewUser;