import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Forms/Input";
import DataTable from "../../components/Tables/DataTable";

const ListUsers = () => {

const [search, setSearch] = useState("");

const [users] = useState([

```
{
  _id: "1",
  nome: "Administrador",
  email: "admin@plataforma.com",
  perfil: "ADMIN",
  telefone: "(91)99999-0000",
  status: "ATIVO"
},

{
  _id: "2",
  nome: "Maria Silva",
  email: "maria@email.com",
  perfil: "DOADOR",
  telefone: "(91)99999-1111",
  status: "ATIVO"
},

{
  _id: "3",
  nome: "Carlos Souza",
  email: "carlos@ong.org",
  perfil: "GESTOR_ONG",
  telefone: "(91)99999-2222",
  status: "ATIVO"
},

{
  _id: "4",
  nome: "Ana Costa",
  email: "ana@ong.org",
  perfil: "VOLUNTARIO",
  telefone: "(91)99999-3333",
  status: "INATIVO"
}
```

]);

const filteredUsers = useMemo(() => {

```
return users.filter((user) => {

  const term = search.toLowerCase();

  return (

    user.nome.toLowerCase().includes(term) ||

    user.email.toLowerCase().includes(term) ||

    user.perfil.toLowerCase().includes(term)

  );

});
```

}, [users, search]);

const activeUsers = users.filter(
(user) => user.status === "ATIVO"
).length;

const handleView = (user) => {

```
console.log("Visualizar", user);
```

};

const handleEdit = (user) => {

```
console.log("Editar", user);
```

};

const handleDelete = (user) => {

```
console.log("Excluir", user);
```

};

return (

```
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
        Total de Usuários:
        {" "}
        {users.length}
      </p>

      <p>
        Usuários Ativos:
        {" "}
        {activeUsers}
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

  <div
    style={{
      marginBottom: "20px"
    }}
  >

    <Input
      label="Pesquisar Usuário"
      placeholder="Nome, email ou perfil..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />

  </div>

  <DataTable
    columns={[
      "Nome",
      "Email",
      "Perfil",
      "Telefone",
      "Status"
    ]}
    data={filteredUsers}
    onView={handleView}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

</div>
```

);

};

export default ListUsers;
