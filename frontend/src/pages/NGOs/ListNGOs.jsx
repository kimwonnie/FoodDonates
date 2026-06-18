import { useState } from "react";
import { Link } from "react-router-dom";

import DataTable from "../../components/Tables/DataTable";

const ListNGOs = () => {

const [ngos] = useState([


{
  _id: "1",
  nome: "ONG Esperança",
  responsavel: "Ana Souza",
  telefone: "(91)99999-1111",
  cidade: "Belém",
  capacidadeArmazenamento: "5000 Kg",
  familiasAtendidas: 120,
  status: "Ativa"
},

{
  _id: "2",
  nome: "ONG Solidariedade",
  responsavel: "Carlos Lima",
  telefone: "(91)99999-2222",
  cidade: "Ananindeua",
  capacidadeArmazenamento: "3000 Kg",
  familiasAtendidas: 85,
  status: "Em análise"
}


]);

const handleView = (ngo) => {


console.log("Visualizar", ngo);


};

const handleEdit = (ngo) => {


console.log("Editar", ngo);


};

const handleDelete = (ngo) => {


console.log("Excluir", ngo);


};

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

      <h1>ONGs Parceiras</h1>

      <p>

        Total de ONGs:
        {" "}
        {ngos.length}

      </p>

    </div>

    <Link to="/ngos/create">

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
        + Nova ONG
      </button>

    </Link>

  </div>

  <DataTable
    columns={[
      "Nome",
      "Responsável",
      "Telefone",
      "Cidade",
      "Capacidade",
      "Famílias Atendidas",
      "Status"
    ]}
    data={ngos}
    onView={handleView}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

</div>


);

};

export default ListNGOs;
