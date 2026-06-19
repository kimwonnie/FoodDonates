const ConfirmDelivery = () => {

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

dataConfirmacao: "10/06/2026",

horaConfirmacao: "14:35",

confirmadoPor: "Maria Silva",

comprovante: "COMP-001",

status: "ENTREGUE",

observacoes:
  "Entrega recebida sem intercorrências."


};

return (


<div>

  <h1>Confirmação da Entrega</h1>

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

  <hr />

  <h2>Confirmação</h2>

  <p>
    <strong>Status:</strong>
    {" "}
    {delivery.status}
  </p>

  <p>
    <strong>Confirmado por:</strong>
    {" "}
    {delivery.confirmadoPor}
  </p>

  <p>
    <strong>Data da Confirmação:</strong>
    {" "}
    {delivery.dataConfirmacao}
  </p>

  <p>
    <strong>Hora da Confirmação:</strong>
    {" "}
    {delivery.horaConfirmacao}
  </p>

  <p>
    <strong>Comprovante:</strong>
    {" "}
    {delivery.comprovante}
  </p>

  <hr />

  <h2>Observações Finais</h2>

  <p>

    {delivery.observacoes}

  </p>

</div>


);

};

export default ConfirmDelivery;
