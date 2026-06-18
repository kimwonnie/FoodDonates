import { useState } from "react";

const FamilyReport = () => {

  const [data] = useState({

    familiasAtendidas: 245,
    familiasPendentes: 18

  });

  return (

    <div>

      <h1>Relatório de Famílias</h1>

      <p>
        Famílias Atendidas:
        {" "}
        {data.familiasAtendidas}
      </p>

      <p>
        Famílias Pendentes:
        {" "}
        {data.familiasPendentes}
      </p>

    </div>

  );

};

export default FamilyReport;