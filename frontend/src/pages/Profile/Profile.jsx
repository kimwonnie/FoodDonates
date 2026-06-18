const Profile = () => {

  const user = {

    nome: "Williams Santos",
    email: "williams@email.com",
    telefone: "(91)99999-9999",
    perfil: "ADMIN",
    status: "ATIVO"

  };

  return (

    <div>

      <h1>Meu Perfil</h1>

      <div className="profile-card">

        <div className="profile-avatar">

          <img
            src="/avatar.png"
            alt="Avatar"
            width="120"
          />

        </div>

        <div>

          <p>
            <strong>Nome:</strong>
            {" "}
            {user.nome}
          </p>

          <p>
            <strong>Email:</strong>
            {" "}
            {user.email}
          </p>

          <p>
            <strong>Telefone:</strong>
            {" "}
            {user.telefone}
          </p>

          <p>
            <strong>Perfil:</strong>
            {" "}
            {user.perfil}
          </p>

          <p>
            <strong>Status:</strong>
            {" "}
            {user.status}
          </p>

        </div>

      </div>

    </div>

  );

};

export default Profile;