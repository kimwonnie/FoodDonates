import { useEffect, useState } from "react";

const StockReport = () => {

const [report, setReport] = useState(null);

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

const fetchReport = async () => {


try {

  setLoading(true);

  const response = await fetch(
    "http://localhost:3000/reports/stock"
  );

  if (!response.ok) {

    throw new Error(
      "Erro ao buscar relatório de estoque"
    );

  }

  const data = await response.json();

  setReport(data);

} catch (err) {

  console.error(err);

  setError(
    "Erro ao carregar relatório de estoque"
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


return <p>Nenhum dado encontrado.</p>;


}

return (


<div>

  <h1>Relatório de Estoque</h1>

  <hr />

  <p>
    <strong>Total em Estoque:</strong>
    {" "}
    {report.totalEstoque} Kg
  </p>

  <p>
    <strong>Itens Cadastrados:</strong>
    {" "}
    {report.totalItens}
  </p>

  <p>
    <strong>Próximos do Vencimento:</strong>
    {" "}
    {report.proximosVencimento}
  </p>

  <p>
    <strong>Itens Vencidos:</strong>
    {" "}
    {report.vencidos}
  </p>

  <p>
    <strong>Última Atualização:</strong>
    {" "}
    {report.ultimaAtualizacao}
  </p>

  <hr />

  <h2>Alimentos em Estoque</h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse"
    }}
  >

    <thead>

      <tr>
        <th>Alimento</th>
        <th>Quantidade</th>
        <th>Validade</th>
      </tr>

    </thead>

    <tbody>

      {report.itens?.map(
        (item, index) => (

          <tr key={index}>

            <td>{item.nome}</td>

            <td>
              {item.quantidade} Kg
            </td>

            <td>
              {item.validade}
            </td>

          </tr>

        )
      )}

    </tbody>

  </table>

</div>


);

};

export default StockReport;
