import { useState } from "react";

const DeliveryReport = () => {

  const [data] = useState({

    entregasRealizadas: 285,
    entregasPendentes: 15

  });

  return (

    <div>

      <h1>Relatório de Entregas</h1>

      <p>
        Entregas Realizadas:
        {" "}
        {data.entregasRealizadas}
      </p>

      <p>
        Entregas Pendentes:
        {" "}
        {data.entregasPendentes}
      </p>

    </div>

  );

};

export default DeliveryReport;