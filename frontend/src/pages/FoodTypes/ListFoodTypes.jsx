import { useState } from "react";
import DataTable from "../../components/Tables/DataTable";

const ListFoodTypes = () => {

  const [foods] = useState([
    {
      _id: "1",
      nome: "Arroz",
      unidadeMedida: "kg",
      validadeDias: 365,
      status: "ATIVO"
    },
    {
      _id: "2",
      nome: "Feijão",
      unidadeMedida: "kg",
      validadeDias: 365,
      status: "ATIVO"
    }
  ]);

  return (
    <div>

      <h1>Tipos de Alimentos</h1>

      <DataTable
        columns={[
          "Nome",
          "Unidade",
          "Validade",
          "Status"
        ]}
        data={foods}
        onView={(food) => console.log(food)}
        onEdit={(food) => console.log(food)}
        onDelete={(food) => console.log(food)}
      />

    </div>
  );
};

export default ListFoodTypes;