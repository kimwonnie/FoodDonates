const NGODetails = () => {

  const ngo = {

    nome: "ONG Esperança",
    cnpj: "00.000.000/0001-00",
    email: "contato@ong.com",
    telefone: "(91)99999-9999",
    endereco: "Belém - PA",
    status: "Ativa"

  };

  return (

    <div>

      <h1>Detalhes da ONG</h1>

      <p><strong>Nome:</strong> {ngo.nome}</p>

      <p><strong>CNPJ:</strong> {ngo.cnpj}</p>

      <p><strong>Email:</strong> {ngo.email}</p>

      <p><strong>Telefone:</strong> {ngo.telefone}</p>

      <p><strong>Endereço:</strong> {ngo.endereco}</p>

      <p><strong>Status:</strong> {ngo.status}</p>

    </div>

  );

};

export default NGODetails;