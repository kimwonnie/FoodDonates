import { useState } from "react";
import { Link } from "react-router-dom";

import DataTable from "../../components/Tables/DataTable";

const ListFamilies = () => {

const [families] = useState([

```
{
  _id: "1",
  responsavel: "Maria Silva",
  telefone: "(91)99999-9999",
  cidade: "Belém",
  membros: 5,
  rendaFamiliar: "R$ 800",
  vulnerabilidade: "Insegurança alimentar",
  status: "Ativa"
},

{
  _id: "2",
  responsavel: "José Santos",
  telefone: "(91)98888-8888",
  cidade: "Ananindeua",
  membros: 3,
  rendaFamiliar: "R$ 1.200",
  vulnerabilidade: "Desemprego",
  status: "Em análise"
}
```

]);

const handleView = (family) => {

```
console.log("Visualizar", family);
```

};

const handleEdit = (family) => {

```
console.log("Editar", family);
```

};

const handleDelete = (family) => {

```
console.log("Excluir", family);
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

      <h1>Famílias Cadastradas</h1>

      <p>
        Total de famílias: {families.length}
      </p>

    </div>

    <Link to="/families/create">

      <button
        style={{
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          background: "#6C63FF",
          color: "#FFFFFF",
          fontWeight: "600"
        }}
      >
        + Nova Família
      </button>

    </Link>

  </div>

  <DataTable
    columns={[
      "Responsável",
      "Telefone",
      "Cidade",
      "Membros",
      "Renda Familiar",
      "Vulnerabilidade",
      "Status"
    ]}
    data={families}
    onView={handleView}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

</div>
```

);

};

export default ListFamilies;
