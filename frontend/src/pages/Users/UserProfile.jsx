import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserProfile = () => {

const { id } = useParams();

const [user, setUser] = useState(null);

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

const fetchUser = async () => {


try {

  setLoading(true);

  const response = await fetch(
    `http://localhost:3000/users/${id}`
  );

  if (!response.ok) {

    throw new Error(
      "Erro ao buscar usuário"
    );

  }

  const data = await response.json();

  setUser(data);

} catch (err) {

  console.error(err);

  setError(
    "Erro ao carregar perfil"
  );

} finally {

  setLoading(false);

}


};

useEffect(() => {


fetchUser();


}, [id]);

if (loading) {


return <p>Carregando perfil...</p>;


}

if (error) {


return (
  <p style={{ color: "red" }}>
    {error}
  </p>
);


}

if (!user) {


return (
  <p>Usuário não encontrado.</p>
);


}

return (


<div>

  <h1>Meu Perfil</h1>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "30px"
    }}
  >

    <img
      src={
        user.avatar ||
        "https://via.placeholder.com/120"
      }
      alt={user.nome}
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        objectFit: "cover"
      }}
    />

    <div>

      <h2>{user.nome}</h2>

      <p>{user.email}</p>

      <p>
        Perfil:
        {" "}
        {user.perfil}
      </p>

    </div>

  </div>

  <hr />

  <h2>Informações Pessoais</h2>

  <p>
    <strong>Telefone:</strong>
    {" "}
    {user.telefone || "-"}
  </p>

  <p>
    <strong>Status:</strong>
    {" "}
    {user.status}
  </p>

  <hr />

  <h2>Informações do Sistema</h2>

  <p>
    <strong>Data de Cadastro:</strong>
    {" "}
    {user.createdAt
      ? new Date(
          user.createdAt
        ).toLocaleDateString("pt-BR")
      : "-"}
  </p>

  <p>
    <strong>Último Acesso:</strong>
    {" "}
    {user.lastLogin
      ? new Date(
          user.lastLogin
        ).toLocaleString("pt-BR")
      : "-"}
  </p>

  {user.ong && (

    <p>
      <strong>ONG:</strong>
      {" "}
      {user.ong}
    </p>

  )}

  <div
    style={{
      marginTop: "30px"
    }}
  >

    <Link to={`/users/edit/${id}`}>

      <button
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          background: "#6C63FF",
          color: "#FFF",
          cursor: "pointer"
        }}
      >
        Editar Perfil
      </button>

    </Link>

  </div>

</div>


);

};

export default UserProfile;
