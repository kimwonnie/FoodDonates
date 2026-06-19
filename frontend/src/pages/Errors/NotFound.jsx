import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-page" style={{ textAlign: "center", marginTop: "80px" }}>

      <h1>404</h1>

      <h2>Página não encontrada</h2>

      <p>
        A página que você tentou acessar não existe ou foi removida.
      </p>

      <Link to="/dashboard">
        Voltar ao Dashboard
      </Link>

    </div>
  );
};

export default NotFound;