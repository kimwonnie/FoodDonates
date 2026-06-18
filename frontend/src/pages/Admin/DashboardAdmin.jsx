const DashboardAdmin = () => {

  return (

    <div>

      <h1>Painel Administrativo</h1>

      <div className="dashboard-grid">

        <div className="card">
          <h3>Usuários</h3>
          <p>125</p>
        </div>

        <div className="card">
          <h3>Famílias</h3>
          <p>245</p>
        </div>

        <div className="card">
          <h3>ONGs</h3>
          <p>18</p>
        </div>

        <div className="card">
          <h3>Doações</h3>
          <p>1.230</p>
        </div>

      </div>

    </div>

  );

};

export default DashboardAdmin;