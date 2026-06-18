import { useState } from "react";
import DataTable from "../../components/Tables/DataTable";

const ListDonations = () => {

  const [donations] = useState([
    {
      _id: "1",
      item: "Cesta Básica",
      quantidade: 50,
      doador: "João Silva",
      status: "Disponível"
    },
    {
      _id: "2",
      item: "Roupas",
      quantidade: 120,
      doador: "Maria Santos",
      status: "Entregue"
    }
  ]);

  return (
    <div>

      <h1>Doações</h1>

      <DataTable
        columns={[
          "Item",
          "Quantidade",
          "Doador",
          "Status"
        ]}
        data={donations}
        onView={(donation) => console.log(donation)}
        onEdit={(donation) => console.log(donation)}
        onDelete={(donation) => console.log(donation)}
      />

    </div>
  );
};

export default ListDonations;