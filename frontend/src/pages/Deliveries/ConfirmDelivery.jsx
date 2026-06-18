const ConfirmDelivery = () => {

  const delivery = {

    familia: "Maria Silva",
    item: "Cesta Básica",
    dataEntrega: "10/06/2026",
    responsavel: "Carlos Souza",
    status: "ENTREGUE"

  };

  return (

    <div>

      <h1>Confirmação da Entrega</h1>

      <p>
        <strong>Família:</strong>
        {" "}
        {delivery.familia}
      </p>

      <p>
        <strong>Item:</strong>
        {" "}
        {delivery.item}
      </p>

      <p>
        <strong>Data:</strong>
        {" "}
        {delivery.dataEntrega}
      </p>

      <p>
        <strong>Responsável:</strong>
        {" "}
        {delivery.responsavel}
      </p>

      <p>
        <strong>Status:</strong>
        {" "}
        {delivery.status}
      </p>

    </div>

  );

};

export default ConfirmDelivery;