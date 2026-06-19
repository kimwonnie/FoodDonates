import { useState } from "react";

const AuditSettings = () => {

  const [settings] = useState({
    login: true,
    alteracoes: true,
    exclusoes: true,
    exportacoes: true
  });

  return (
    <div>

      <h1>Auditoria</h1>

      <hr />

      <ul>

        <li>
          Registrar Logins: {" "}
          {settings.login ? "Ativado" : "Desativado"}
        </li>

        <li>
          Registrar Alterações: {" "}
          {settings.alteracoes ? "Ativado" : "Desativado"}
        </li>

        <li>
          Registrar Exclusões: {" "}
          {settings.exclusoes ? "Ativado" : "Desativado"}
        </li>

        <li>
          Registrar Exportações: {" "}
          {settings.exportacoes ? "Ativado" : "Desativado"}
        </li>

      </ul>

    </div>
  );
};

export default AuditSettings;