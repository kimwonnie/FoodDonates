import { useState } from "react";
import DataTable from "../../components/Tables/DataTable";

const ListDeliveries = () => {

  const [deliveries] = useState([
    {
      _id: "1",
      familia: "Maria Silva",
      item: "Cesta Básica",
      data: "10/06/2026",
      status: "Entregue"
    },
    {
      _id: "2",
      familia: "José Santos",
      item: "Kit Higiene",
      data: "12/06/2026",
      status: "Pendente"
    }
  ]);

  return (
    <div>

      <h1>Entregas</h1>

      <DataTable
        columns={[
          "Família",
          "Item",
          "Data",
          "Status"
        ]}
        data={deliveries}
        onView={(delivery) => console.log(delivery)}
        onEdit={(delivery) => console.log(delivery)}
        onDelete={(delivery) => console.log(delivery)}
      />

    </div>
  );
};

export default ListDeliveries;