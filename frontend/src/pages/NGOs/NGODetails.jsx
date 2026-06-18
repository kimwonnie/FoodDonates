const NGODetails = () => {

const ngo = {


id: "1",

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

const donations = [


{
  data: "05/01/2026",
  doador: "Supermercado Alfa",
  quantidade: "500 Kg"
},

{
  data: "20/03/2026",
  doador: "Empresa Beta",
  quantidade: "300 Kg"
}


];

const deliveries = [


{
  data: "10/01/2026",
  familias: 35,
  quantidade: "250 Kg"
},

{
  data: "25/03/2026",
  familias: 42,
  quantidade: "320 Kg"
}


];

return (


<div>

  <h1>Detalhes da ONG</h1>

  <hr />

  <h2>Dados Institucionais</h2>

  <p><strong>Nome:</strong> {ngo.nome}</p>

  <p><strong>CNPJ:</strong> {ngo.cnpj}</p>

  <p><strong>Responsável:</strong> {ngo.responsavel}</p>

  <p><strong>Status:</strong> {ngo.status}</p>

  <hr />

  <h2>Contato</h2>

  <p><strong>Email:</strong> {ngo.email}</p>

  <p><strong>Telefone:</strong> {ngo.telefone}</p>

  <hr />

  <h2>Localização</h2>

  <p><strong>CEP:</strong> {ngo.cep}</p>

  <p><strong>Endereço:</strong> {ngo.endereco}</p>

  <p><strong>Bairro:</strong> {ngo.bairro}</p>

  <p><strong>Cidade:</strong> {ngo.cidade}</p>

  <p><strong>Estado:</strong> {ngo.estado}</p>

  <hr />

  <h2>Capacidade Operacional</h2>

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

  <h2>Histórico de Doações Recebidas</h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse"
    }}
  >

    <thead>

      <tr>

        <th>Data</th>

        <th>Doador</th>

        <th>Quantidade</th>

      </tr>

    </thead>

    <tbody>

      {donations.map((item, index) => (

        <tr key={index}>

          <td>{item.data}</td>

          <td>{item.doador}</td>

          <td>{item.quantidade}</td>

        </tr>

      ))}

    </tbody>

  </table>

  <hr />

  <h2>Histórico de Entregas</h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse"
    }}
  >

    <thead>

      <tr>

        <th>Data</th>

        <th>Famílias</th>

        <th>Quantidade</th>

      </tr>

    </thead>

    <tbody>

      {deliveries.map((item, index) => (

        <tr key={index}>

          <td>{item.data}</td>

          <td>{item.familias}</td>

          <td>{item.quantidade}</td>

        </tr>

      ))}

    </tbody>

  </table>

  <hr />

  <h2>Resumo Operacional</h2>

  <p>

    <strong>Total de Doações Recebidas:</strong>
    {" "}
    {donations.length}

  </p>

  <p>

    <strong>Total de Entregas:</strong>
    {" "}
    {deliveries.length}

  </p>

  <p>

    <strong>Última Entrega:</strong>
    {" "}
    {
      deliveries[
        deliveries.length - 1
      ].data
    }

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

export default NGODetails;
