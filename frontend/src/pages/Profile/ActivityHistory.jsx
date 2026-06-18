const ActivityHistory = () => {

  const activities = [

    {
      data: "10/06/2026",
      acao: "Login realizado"
    },

    {
      data: "10/06/2026",
      acao: "Cadastro de Família"
    },

    {
      data: "11/06/2026",
      acao: "Cadastro de Doação"
    },

    {
      data: "12/06/2026",
      acao: "Confirmação de Entrega"
    }

  ];

  return (

    <div>

      <h1>Histórico de Atividades</h1>

      <table>

        <thead>

          <tr>

            <th>Data</th>
            <th>Ação</th>

          </tr>

        </thead>

        <tbody>

          {activities.map(
            (activity, index) => (

              <tr key={index}>

                <td>{activity.data}</td>

                <td>{activity.acao}</td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );

};

export default ActivityHistory;