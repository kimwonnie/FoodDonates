const DonationDetails = () => {

  const donation = {

    item: "Cesta Básica",
    categoria: "Alimento",
    quantidade: 50,
    doador: "João Silva",
    status: "Disponível",
    descricao: "Doação para famílias cadastradas"

  };

  return (

    <div>

      <h1>Detalhes da Doação</h1>

      <p><strong>Item:</strong> {donation.item}</p>

      <p><strong>Categoria:</strong> {donation.categoria}</p>

      <p><strong>Quantidade:</strong> {donation.quantidade}</p>

      <p><strong>Doador:</strong> {donation.doador}</p>

      <p><strong>Status:</strong> {donation.status}</p>

      <p><strong>Descrição:</strong> {donation.descricao}</p>

    </div>

  );

};

export default DonationDetails;