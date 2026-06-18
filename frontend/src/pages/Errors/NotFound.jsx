import { Link } from "react-router-dom";

const NotFound = () => {

  return (

    <div className="error-page">

      <h1>404</h1>

      <h2>Página não encontrada</h2>

      <p>

        A página que você tentou acessar
        não existe.

      </p>

      <Link to="/dashboard">

        Voltar ao Dashboard

      </Link>

    </div>

  );

};

export default NotFound;