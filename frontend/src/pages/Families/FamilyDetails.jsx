const FamilyDetails = () => {

const family = {


id: "1",

responsavel: "Maria Silva",

cpf: "000.000.000-00",

telefone: "(91)99999-9999",

email: "maria@email.com",

cep: "66000-000",

endereco: "Rua das Flores",

bairro: "Centro",

cidade: "Belém",

estado: "PA",

membros: 4,

criancas: 2,

idosos: 1,

rendaFamiliar: "R$ 800,00",

vulnerabilidade:
  "Insegurança alimentar",

status: "Ativa",

prioridade: "Alta",

observacoes:
  "Família acompanhada por ONG parceira.",

dataCadastro:
  "10/06/2026"


};

const deliveries = [


{
  data: "05/01/2026",
  alimentos: "20 kg",
  ong: "ONG Esperança"
},

{
  data: "15/03/2026",
  alimentos: "25 kg",
  ong: "ONG Esperança"
}


];

return (


<div>

  <h1>Detalhes da Família</h1>

  <hr />

  <h2>Dados do Responsável</h2>

  <p>
    <strong>Responsável:</strong> {family.responsavel}
  </p>

  <p>
    <strong>CPF:</strong> {family.cpf}
  </p>

  <p>
    <strong>Telefone:</strong> {family.telefone}
  </p>

  <p>
    <strong>E-mail:</strong> {family.email}
  </p>

  <hr />

  <h2>Endereço</h2>

  <p>
    <strong>CEP:</strong> {family.cep}
  </p>

  <p>
    <strong>Endereço:</strong> {family.endereco}
  </p>

  <p>
    <strong>Bairro:</strong> {family.bairro}
  </p>

  <p>
    <strong>Cidade:</strong> {family.cidade}
  </p>

  <p>
    <strong>Estado:</strong> {family.estado}
  </p>

  <hr />

  <h2>Indicadores Sociais</h2>

  <p>
    <strong>Membros:</strong> {family.membros}
  </p>

  <p>
    <strong>Crianças:</strong> {family.criancas}
  </p>

  <p>
    <strong>Idosos:</strong> {family.idosos}
  </p>

  <p>
    <strong>Renda Familiar:</strong> {family.rendaFamiliar}
  </p>

  <p>
    <strong>Vulnerabilidade:</strong> {family.vulnerabilidade}
  </p>

  <p>
    <strong>Prioridade:</strong> {family.prioridade}
  </p>

  <p>
    <strong>Status:</strong> {family.status}
  </p>

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

        <th>Quantidade</th>

        <th>ONG</th>

      </tr>

    </thead>

    <tbody>

      {deliveries.map((delivery, index) => (

        <tr key={index}>

          <td>{delivery.data}</td>

          <td>{delivery.alimentos}</td>

          <td>{delivery.ong}</td>

        </tr>

      ))}

    </tbody>

  </table>

  <hr />

  <h2>Resumo de Atendimento</h2>

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

  <h2>Observações</h2>

  <p>

    {family.observacoes}

  </p>

  <hr />

  <p>

    <strong>Data de Cadastro:</strong>
    {" "}
    {family.dataCadastro}

  </p>

</div>


);

};

export default FamilyDetails;
