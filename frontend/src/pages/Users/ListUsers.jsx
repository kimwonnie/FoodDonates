import { useState } from "react";
import DataTable from "../../components/Tables/DataTable";

const ListUsers = () => {

  const [users] = useState([
    {
      _id: "1",
      nome: "Administrador",
      email: "admin@plataforma.com",
      perfil: "ADMIN",
      status: "ATIVO"
    },
    {
      _id: "2",
      nome: "Maria Silva",
      email: "maria@email.com",
      perfil: "DOADOR",
      status: "ATIVO"
    }
  ]);

  return (
    <div>

      <h1>Usuários</h1>

      <DataTable
        columns={[
          "Nome",
          "Email",
          "Perfil",
          "Status"
        ]}
        data={users}
        onView={(user) => console.log(user)}
        onEdit={(user) => console.log(user)}
        onDelete={(user) => console.log(user)}
      />

    </div>
  );
};

export default ListUsers;