const ViewNGO = () => {

const ngo = {


nome: "ONG Esperança",

cnpj: "00.000.000/0001-00",

responsavel: "Ana Souza",

email: "contato@ong.com",

telefone: "(91)99999-9999",

cep: "66000-000",

endereco: "Rua das Flores",

bairro: "Centro",

cidade: "Belém",

estado: "PA",

capacidadeArmazenamento: "5000 Kg",

familiasAtendidas: 120,

tiposAlimentos:
  "Arroz, Feijão, Leite, Macarrão",

status: "Ativa",

descricao:
  "ONG voltada para assistência alimentar.",

observacoes:
  "Parceira ativa da Plataforma Solidária.",

dataCadastro:
  "10/06/2026"


};

return (


<div>

  <h1>Visualizar ONG</h1>

  <hr />

  <h2>Dados Institucionais</h2>

  <p>
    <strong>Nome:</strong>
    {" "}
    {ngo.nome}
  </p>

  <p>
    <strong>CNPJ:</strong>
    {" "}
    {ngo.cnpj}
  </p>

  <p>
    <strong>Responsável:</strong>
    {" "}
    {ngo.responsavel}
  </p>

  <p>
    <strong>Status:</strong>
    {" "}
    {ngo.status}
  </p>

  <hr />

  <h2>Contato</h2>

  <p>
    <strong>Email:</strong>
    {" "}
    {ngo.email}
  </p>

  <p>
    <strong>Telefone:</strong>
    {" "}
    {ngo.telefone}
  </p>

  <hr />

  <h2>Localização</h2>

  <p>
    <strong>CEP:</strong>
    {" "}
    {ngo.cep}
  </p>

  <p>
    <strong>Endereço:</strong>
    {" "}
    {ngo.endereco}
  </p>

  <p>
    <strong>Bairro:</strong>
    {" "}
    {ngo.bairro}
  </p>

  <p>
    <strong>Cidade:</strong>
    {" "}
    {ngo.cidade}
  </p>

  <p>
    <strong>Estado:</strong>
    {" "}
    {ngo.estado}
  </p>

  <hr />

  <h2>Operação</h2>

  <p>
    <strong>Capacidade de Armazenamento:</strong>
    {" "}
    {ngo.capacidadeArmazenamento}
  </p>

  <p>
    <strong>Famílias Atendidas:</strong>
    {" "}
    {ngo.familiasAtendidas}
  </p>

  <p>
    <strong>Tipos de Alimentos Aceitos:</strong>
    {" "}
    {ngo.tiposAlimentos}
  </p>

  <hr />

  <h2>Descrição</h2>

  <p>

    {ngo.descricao}

  </p>

  <hr />

  <h2>Observações</h2>

  <p>

    {ngo.observacoes}

  </p>

  <hr />

  <p>

    <strong>Data de Cadastro:</strong>
    {" "}
    {ngo.dataCadastro}

  </p>

</div>


);

};

export default ViewNGO;
