const ViewDonation = () => {

const donation = {


id: "1",

tipoDoador: "Pessoa Jurídica",

nomeDoador: "Supermercado Alfa",

cpfCnpj: "00.000.000/0001-00",

telefone: "(91)99999-9999",

email: "contato@alfa.com",

tipoAlimento: "Arroz",

quantidade: 500,

unidade: "Kg",

dataFabricacao: "01/01/2026",

dataValidade: "31/12/2026",

dataDoacao: "01/06/2026",

ongDestino: "ONG Esperança",

status: "Recebida",

observacoes:
  "Alimentos recebidos em perfeito estado."


};

return (


<div>

  <h1>Visualizar Doação</h1>

  <hr />

  <h2>Dados do Doador</h2>

  <p>
    <strong>Tipo:</strong>
    {" "}
    {donation.tipoDoador}
  </p>

  <p>
    <strong>Nome:</strong>
    {" "}
    {donation.nomeDoador}
  </p>

  <p>
    <strong>CPF/CNPJ:</strong>
    {" "}
    {donation.cpfCnpj}
  </p>

  <p>
    <strong>Telefone:</strong>
    {" "}
    {donation.telefone}
  </p>

  <p>
    <strong>Email:</strong>
    {" "}
    {donation.email}
  </p>

  <hr />

  <h2>Dados do Alimento</h2>

  <p>
    <strong>Tipo de Alimento:</strong>
    {" "}
    {donation.tipoAlimento}
  </p>

  <p>
    <strong>Quantidade:</strong>
    {" "}
    {donation.quantidade}
    {" "}
    {donation.unidade}
  </p>

  <p>
    <strong>Data de Fabricação:</strong>
    {" "}
    {donation.dataFabricacao}
  </p>

  <p>
    <strong>Data de Validade:</strong>
    {" "}
    {donation.dataValidade}
  </p>

  <hr />

  <h2>Distribuição</h2>

  <p>
    <strong>ONG Destino:</strong>
    {" "}
    {donation.ongDestino}
  </p>

  <p>
    <strong>Data da Doação:</strong>
    {" "}
    {donation.dataDoacao}
  </p>

  <p>
    <strong>Status:</strong>
    {" "}
    {donation.status}
  </p>

  <hr />

  <h2>Observações</h2>

  <p>

    {donation.observacoes}

  </p>

</div>


);

};

export default ViewDonation;
