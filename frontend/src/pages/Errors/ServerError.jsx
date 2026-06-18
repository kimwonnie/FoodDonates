import { Link } from "react-router-dom";

const ServerError = () => {

  return (

    <div className="error-page">

      <h1>500</h1>

      <h2>Erro Interno do Servidor</h2>

      <p>

        Ocorreu um erro inesperado.

      </p>

      <Link to="/dashboard">

        Retornar ao Sistema

      </Link>

    </div>

  );

};

export default ServerError;