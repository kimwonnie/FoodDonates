const ViewDelivery = () => {

const delivery = {


id: "1",

familia: "Maria Silva",

responsavelFamilia: "Maria Silva",

ong: "ONG Esperança",

alimento: "Arroz",

quantidade: 20,

unidade: "Kg",

dataEntrega: "10/06/2026",

responsavelEntrega: "Carlos Souza",

comprovante: "COMP-001",

status: "ENTREGUE",

observacoes:
  "Entrega realizada com sucesso."


};

return (


<div>

  <h1>Visualizar Entrega</h1>

  <hr />

  <h2>Família Beneficiada</h2>

  <p>
    <strong>Família:</strong>
    {" "}
    {delivery.familia}
  </p>

  <p>
    <strong>Responsável:</strong>
    {" "}
    {delivery.responsavelFamilia}
  </p>

  <hr />

  <h2>Dados da Entrega</h2>

  <p>
    <strong>ONG:</strong>
    {" "}
    {delivery.ong}
  </p>

  <p>
    <strong>Alimento:</strong>
    {" "}
    {delivery.alimento}
  </p>

  <p>
    <strong>Quantidade:</strong>
    {" "}
    {delivery.quantidade}
    {" "}
    {delivery.unidade}
  </p>

  <p>
    <strong>Data da Entrega:</strong>
    {" "}
    {delivery.dataEntrega}
  </p>

  <p>
    <strong>Responsável pela Entrega:</strong>
    {" "}
    {delivery.responsavelEntrega}
  </p>

  <p>
    <strong>Comprovante:</strong>
    {" "}
    {delivery.comprovante}
  </p>

  <p>
    <strong>Status:</strong>
    {" "}
    {delivery.status}
  </p>

  <hr />

  <h2>Observações</h2>

  <p>

    {delivery.observacoes}

  </p>

</div>


);

};

export default ViewDelivery;
