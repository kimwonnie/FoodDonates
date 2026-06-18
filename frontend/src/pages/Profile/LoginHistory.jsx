const LoginHistory = () => {

  const logins = [

    {
      data: "10/06/2026 08:15",
      ip: "192.168.1.10",
      dispositivo: "Chrome Windows"
    },

    {
      data: "11/06/2026 09:30",
      ip: "192.168.1.10",
      dispositivo: "Chrome Windows"
    }

  ];

  return (

    <div>

      <h1>Histórico de Login</h1>

      <table>

        <thead>

          <tr>

            <th>Data</th>
            <th>IP</th>
            <th>Dispositivo</th>

          </tr>

        </thead>

        <tbody>

          {logins.map(
            (login, index) => (

              <tr key={index}>

                <td>{login.data}</td>

                <td>{login.ip}</td>

                <td>{login.dispositivo}</td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );

};

export default LoginHistory;