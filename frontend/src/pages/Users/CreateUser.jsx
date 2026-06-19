import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DataTable from "../../components/Tables/DataTable";

const ListUsers = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔌 BUSCA NO BACKEND (já pronto para integração)
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/users");

      if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
      }

      const data = await response.json();

      setUsers(data);

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar usuários");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleView = (user) => {
    console.log("Visualizar", user);
    // futuro: modal ou página /users/:id
  };

  const handleEdit = (user) => {
    console.log("Editar", user);
    // futuro: navigate(`/users/edit/${user._id}`)
  };

  const handleDelete = async (user) => {
    console.log("Excluir", user);

    const confirmDelete = window.confirm(
      `Deseja realmente excluir o usuário ${user.nome}?`
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:3000/users/${user._id}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao excluir usuário");
      }

      // remove do state sem precisar recarregar tudo
      setUsers((prev) => prev.filter((u) => u._id !== user._id));

    } catch (err) {
      console.error(err);
      alert("Erro ao excluir usuário");
    }
  };

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >

        <div>
          <h1>Usuários</h1>

          <p>
            Total de Usuários: {" "}
            {users.length}
          </p>

        </div>

        <Link to="/users/create">
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background: "#6C63FF",
              color: "#FFF",
              fontWeight: "600"
            }}
          >
            + Novo Usuário
          </button>
        </Link>

      </div>

      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <DataTable
        columns={[
          "Nome",
          "Email",
          "Perfil",
          "Telefone",
          "Status"
        ]}
        data={users}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default ListUsers;