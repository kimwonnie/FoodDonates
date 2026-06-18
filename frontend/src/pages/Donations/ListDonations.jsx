import { useState } from "react";
import { Link } from "react-router-dom";

import DataTable from "../../components/Tables/DataTable";

const ListDonations = () => {

const [donations] = useState([


{
  _id: "1",

  tipoAlimento: "Arroz",

  quantidade: 500,

  unidade: "Kg",

  doador: "Supermercado Alfa",

  ongDestino: "ONG Esperança",

  dataValidade: "2026-12-31",

  status: "Recebida"
},

{
  _id: "2",

  tipoAlimento: "Feijão",

  quantidade: 300,

  unidade: "Kg",

  doador: "Empresa Beta",

  ongDestino: "ONG Solidariedade",

  dataValidade: "2026-11-20",

  status: "Distribuída"
}


]);

const handleView = (donation) => {


console.log("Visualizar", donation);


};

const handleEdit = (donation) => {


console.log("Editar", donation);


};

const handleDelete = (donation) => {


console.log("Excluir", donation);


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

      <h1>Doações de Alimentos</h1>

      <p>

        Total de Doações:
        {" "}
        {donations.length}

      </p>

    </div>

    <Link to="/donations/create">

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
        + Nova Doação
      </button>

    </Link>

  </div>

  <DataTable
    columns={[
      "Alimento",
      "Quantidade",
      "Unidade",
      "Doador",
      "ONG Destino",
      "Validade",
      "Status"
    ]}
    data={donations}
    onView={handleView}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

</div>


);

};

export default ListDonations;
