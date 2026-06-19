import { useState } from "react";
import { Link } from "react-router-dom";

import DataTable from "../../components/Tables/DataTable";

const ListDeliveries = () => {

const [deliveries] = useState([

{
  _id: "1",

  familia: "Maria Silva",

  alimento: "Arroz",

  quantidade: 20,

  unidade: "Kg",

  ong: "ONG Esperança",

  dataEntrega: "10/06/2026",

  responsavelEntrega: "Carlos Souza",

  status: "ENTREGUE"
},

{
  _id: "2",

  familia: "José Santos",

  alimento: "Feijão",

  quantidade: 15,

  unidade: "Kg",

  ong: "ONG Solidariedade",

  dataEntrega: "12/06/2026",

  responsavelEntrega: "Ana Costa",

  status: "PENDENTE"
}


]);

const handleView = (delivery) => {


console.log("Visualizar", delivery);


};

const handleEdit = (delivery) => {


console.log("Editar", delivery);


};

const handleDelete = (delivery) => {


console.log("Excluir", delivery);


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

      <h1>Entregas</h1>

      <p>

        Total de Entregas:
        {" "}
        {deliveries.length}

      </p>

    </div>

    <Link to="/deliveries/create">

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
        + Nova Entrega
      </button>

    </Link>

  </div>

  <DataTable
    columns={[
      "Família",
      "Alimento",
      "Quantidade",
      "ONG",
      "Data",
      "Status"
    ]}
    data={deliveries}
    onView={handleView}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

</div>


);

};

export default ListDeliveries;
