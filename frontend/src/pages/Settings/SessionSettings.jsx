import { useState } from "react";

const SessionSettings = () => {

  const [session] = useState({
    tempoLimite: 30,
    logoutAutomatico: true,
    encerrarSessoesSimultaneas: true
  });

  return (
    <div>

      <h1>Configuração de Sessão</h1>

      <hr />

      <p>
        <strong>Tempo limite:</strong> {session.tempoLimite} minutos
      </p>

      <p>
        <strong>Logout automático:</strong>{" "}
        {session.logoutAutomatico ? "Habilitado" : "Desabilitado"}
      </p>

      <p>
        <strong>Encerrar sessões simultâneas:</strong>{" "}
        {session.encerrarSessoesSimultaneas ? "Ativado" : "Desativado"}
      </p>

    </div>
  );
};

export default SessionSettings;