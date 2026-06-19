import { Link } from "react-router-dom";

const ServerError = () => {

  return (

    <div className="error-page" style={{ textAlign: "center", marginTop: "80px" }}>

      <h1>500</h1>

      <h2>Erro Interno do Servidor</h2>

      <p>
        Ocorreu um erro inesperado no sistema. Tente novamente mais tarde.
      </p>

      <button onClick={() => window.location.reload()}>
        Tentar novamente
      </button>

      <br /><br />

      <Link to="/dashboard">
        Retornar ao Sistema
      </Link>

    </div>

  );

};

export default ServerError;