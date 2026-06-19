import { Link } from "react-router-dom";

const Settings = () => {

  return (
    <div>

      <h1>Configurações</h1>

      <hr />

      <div className="settings-grid">

        <Link to="/settings/general">
          Configurações Gerais
        </Link>

        <Link to="/settings/security">
          Segurança
        </Link>

        <Link to="/settings/notifications">
          Notificações
        </Link>

        <Link to="/settings/sessions">
          Sessões
        </Link>

        <Link to="/settings/backup">
          Backup
        </Link>

        <Link to="/settings/audit">
          Auditoria
        </Link>

      </div>

    </div>
  );
};

export default Settings;