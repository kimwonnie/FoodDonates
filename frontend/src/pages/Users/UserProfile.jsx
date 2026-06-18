const UserProfile = () => {

  const user = {

    nome: "Administrador",
    email: "admin@plataforma.com",
    perfil: "ADMIN",
    status: "ATIVO"

  };

  return (

    <div>

      <h1>Perfil do Usuário</h1>

      <p>
        <strong>Nome:</strong> {user.nome}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Perfil:</strong> {user.perfil}
      </p>

      <p>
        <strong>Status:</strong> {user.status}
      </p>

    </div>

  );

};

export default UserProfile;