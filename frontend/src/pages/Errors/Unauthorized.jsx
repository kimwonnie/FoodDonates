import { Link } from "react-router-dom";

const Unauthorized = () => {

  return (

    <div className="error-page" style={{ textAlign: "center", marginTop: "80px" }}>

      <h1>403</h1>

      <h2>Acesso Negado</h2>

      <p>
        Você não possui permissão para acessar esta página.
      </p>

      <Link to="/dashboard">
        Voltar ao Sistema
      </Link>

    </div>

  );

};

export default Unauthorized;