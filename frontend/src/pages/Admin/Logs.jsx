const Logs = () => {

  const logs = [

    {
      usuario: "Administrador",
      acao: "Criou uma doação",
      data: "15/06/2026"
    },

    {
      usuario: "Maria Silva",
      acao: "Atualizou perfil",
      data: "15/06/2026"
    }

  ];

  return (

    <div>

      <h1>Logs do Sistema</h1>

      <table>

        <thead>

          <tr>

            <th>Usuário</th>
            <th>Ação</th>
            <th>Data</th>

          </tr>

        </thead>

        <tbody>

          {logs.map((log,index)=>(

            <tr key={index}>

              <td>{log.usuario}</td>

              <td>{log.acao}</td>

              <td>{log.data}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default Logs;