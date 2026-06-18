const ViewFamily = () => {

const family = {


responsavel: "Maria Silva",

cpf: "000.000.000-00",

telefone: "(91)99999-9999",

email: "maria@email.com",

cep: "66000-000",

endereco: "Rua A, nº 100",

bairro: "Centro",

cidade: "Belém",

estado: "PA",

membros: 4,

criancas: 2,

idosos: 1,

rendaFamiliar: "R$ 800,00",

vulnerabilidade:
  "Insegurança alimentar",

observacoes:
  "Família acompanhada pela ONG parceira.",

status: "Ativa",

dataCadastro:
  "10/06/2026"


};

return (


<div>

  <h1>Visualizar Família</h1>

  <hr />

  <h2>Dados do Responsável</h2>

  <p>
    <strong>Responsável:</strong>
    {" "}
    {family.responsavel}
  </p>

  <p>
    <strong>CPF:</strong>
    {" "}
    {family.cpf}
  </p>

  <p>
    <strong>Telefone:</strong>
    {" "}
    {family.telefone}
  </p>

  <p>
    <strong>E-mail:</strong>
    {" "}
    {family.email}
  </p>

  <hr />

  <h2>Endereço</h2>

  <p>
    <strong>CEP:</strong>
    {" "}
    {family.cep}
  </p>

  <p>
    <strong>Endereço:</strong>
    {" "}
    {family.endereco}
  </p>

  <p>
    <strong>Bairro:</strong>
    {" "}
    {family.bairro}
  </p>

  <p>
    <strong>Cidade:</strong>
    {" "}
    {family.cidade}
  </p>

  <p>
    <strong>Estado:</strong>
    {" "}
    {family.estado}
  </p>

  <hr />

  <h2>Composição Familiar</h2>

  <p>
    <strong>Membros:</strong>
    {" "}
    {family.membros}
  </p>

  <p>
    <strong>Crianças:</strong>
    {" "}
    {family.criancas}
  </p>

  <p>
    <strong>Idosos:</strong>
    {" "}
    {family.idosos}
  </p>

  <p>
    <strong>Renda Familiar:</strong>
    {" "}
    {family.rendaFamiliar}
  </p>

  <hr />

  <h2>Assistência Social</h2>

  <p>
    <strong>Vulnerabilidade:</strong>
    {" "}
    {family.vulnerabilidade}
  </p>

  <p>
    <strong>Status:</strong>
    {" "}
    {family.status}
  </p>

  <p>
    <strong>Data de Cadastro:</strong>
    {" "}
    {family.dataCadastro}
  </p>

  <p>
    <strong>Observações:</strong>
  </p>

  <p>
    {family.observacoes}
  </p>

</div>


);

};

export default ViewFamily;
