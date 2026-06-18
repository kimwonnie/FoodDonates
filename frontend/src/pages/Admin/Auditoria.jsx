const Auditoria = () => {

  const registros = [

    {
      evento:"Login",
      usuario:"Admin",
      data:"15/06/2026"
    },

    {
      evento:"Exclusão",
      usuario:"Admin",
      data:"15/06/2026"
    }

  ];

  return (

    <div>

      <h1>Auditoria</h1>

      <table>

        <thead>

          <tr>

            <th>Evento</th>
            <th>Usuário</th>
            <th>Data</th>

          </tr>

        </thead>

        <tbody>

          {registros.map((item,index)=>(

            <tr key={index}>

              <td>{item.evento}</td>

              <td>{item.usuario}</td>

              <td>{item.data}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default Auditoria;