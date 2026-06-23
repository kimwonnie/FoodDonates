import { useEffect, useState } from "react";

const DeliveryReport = () => {

const [report, setReport] = useState(null);

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

const fetchReport = async () => {


try {

  setLoading(true);

  const response = await fetch(
    "http://localhost:3000/reports/deliveries"
  );

  if (!response.ok) {

    throw new Error(
      "Erro ao buscar relatório de entregas"
    );

  }

  const data = await response.json();

  setReport(data);

} catch (err) {

  console.error(err);

  setError(
    "Erro ao carregar relatório de entregas"
  );

} finally {

  setLoading(false);

}


};

useEffect(() => {


fetchReport();


}, []);

if (loading) {


return <p>Carregando relatório...</p>;


}

if (error) {


return (
  <p style={{ color: "red" }}>
    {error}
  </p>
);

}

if (!report) {


return (
  <p>Nenhum dado encontrado.</p>
);


}

return (


<div>

  <h1>
    Relatório de Entregas
  </h1>

  <hr />

  <h2>
    Indicadores Gerais
  </h2>

  <p>
    <strong>
      Entregas Realizadas:
    </strong>
    {" "}
    {report.entregasRealizadas}
  </p>

  <p>
    <strong>
      Entregas Pendentes:
    </strong>
    {" "}
    {report.entregasPendentes}
  </p>

  <p>
    <strong>
      Entregas Canceladas:
    </strong>
    {" "}
    {report.entregasCanceladas}
  </p>

  <p>
    <strong>
      Entregas no Mês:
    </strong>
    {" "}
    {report.entregasMes}
  </p>

  <p>
    <strong>
      Total de Famílias Atendidas:
    </strong>
    {" "}
    {report.familiasAtendidas}
  </p>

  <hr />

  <h2>
    Desempenho Operacional
  </h2>

  <p>
    <strong>
      Responsável Destaque:
    </strong>
    {" "}
    {report.responsavelDestaque}
  </p>

  <p>
    <strong>
      Média Mensal de Entregas:
    </strong>
    {" "}
    {report.mediaMensal}
  </p>

  <p>
    <strong>
      Última Atualização:
    </strong>
    {" "}
    {report.ultimaAtualizacao}
  </p>

  <hr />

  <h2>
    Histórico de Entregas
  </h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse"
    }}
  >

    <thead>

      <tr>

        <th>Família</th>

        <th>Alimento</th>

        <th>Quantidade</th>

        <th>Data</th>

        <th>Status</th>

      </tr>

    </thead>

    <tbody>

      {report.entregas?.map(
        (
          entrega,
          index
        ) => (

          <tr key={index}>

            <td>
              {entrega.familia}
            </td>

            <td>
              {entrega.alimento}
            </td>

            <td>
              {entrega.quantidade}
              {" "}
              Kg
            </td>

            <td>
              {entrega.data}
            </td>

            <td>
              {entrega.status}
            </td>

          </tr>

        )
      )}

    </tbody>

  </table>

</div>


);

};

export default DeliveryReport;
