import { useState } from "react";
import DataTable from "../../components/Tables/DataTable";

const ListNGOs = () => {

  const [ngos] = useState([
    {
      _id: "1",
      nome: "ONG Esperança",
      email: "contato@esperanca.org",
      telefone: "(91)99999-1111",
      status: "Ativa"
    },
    {
      _id: "2",
      nome: "ONG Solidariedade",
      email: "contato@solidariedade.org",
      telefone: "(91)99999-2222",
      status: "Pendente"
    }
  ]);

  return (
    <div>

      <h1>ONGs</h1>

      <DataTable
        columns={[
          "Nome",
          "Email",
          "Telefone",
          "Status"
        ]}
        data={ngos}
        onView={(ngo) => console.log(ngo)}
        onEdit={(ngo) => console.log(ngo)}
        onDelete={(ngo) => console.log(ngo)}
      />

    </div>
  );
};

export default ListNGOs;