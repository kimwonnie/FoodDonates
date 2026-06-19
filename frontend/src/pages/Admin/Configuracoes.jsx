import { Link } from "react-router-dom";

const Configuracoes = () => {

  return (
    <div>

      <h1>Configurações Administrativas</h1>

      <hr />

      <div style={{ display: "grid", gap: "10px" }}>

        <Link to="/admin/perfis">
          Gerenciar Perfis
        </Link>

        <Link to="/admin/permissoes">
          Gerenciar Permissões
        </Link>

        <Link to="/admin/logs">
          Configurar Logs
        </Link>

        <Link to="/admin/seguranca">
          Configurar Segurança
        </Link>

        <Link to="/admin/backup">
          Configurar Backup
        </Link>

      </div>

    </div>
  );
};

export default Configuracoes;