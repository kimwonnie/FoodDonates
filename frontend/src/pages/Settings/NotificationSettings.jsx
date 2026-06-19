import { useState } from "react";

const NotificationSettings = () => {

  const [settings, setSettings] = useState({
    emailNovasDoacoes: true,
    emailEntregasConcluidas: true,
    alertasValidade: true,
    alertasEstoqueBaixo: true
  });

  return (
    <div>

      <h1>Configurações de Notificações</h1>

      <hr />

      <ul>

        <li>
          Email para novas doações: {" "}
          {settings.emailNovasDoacoes ? "Ativado" : "Desativado"}
        </li>

        <li>
          Email para entregas concluídas: {" "}
          {settings.emailEntregasConcluidas ? "Ativado" : "Desativado"}
        </li>

        <li>
          Alertas de validade: {" "}
          {settings.alertasValidade ? "Ativado" : "Desativado"}
        </li>

        <li>
          Alertas de estoque baixo: {" "}
          {settings.alertasEstoqueBaixo ? "Ativado" : "Desativado"}
        </li>

      </ul>

    </div>
  );
};

export default NotificationSettings;