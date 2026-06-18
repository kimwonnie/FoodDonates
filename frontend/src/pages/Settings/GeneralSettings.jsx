import { useState } from "react";

const GeneralSettings = () => {

  const [settings, setSettings] = useState({

    nomeSistema: "Plataforma Solidária",
    versao: "1.0",
    idioma: "pt-BR"

  });

  return (

    <div>

      <h1>Configurações Gerais</h1>

      <p>Nome: {settings.nomeSistema}</p>

      <p>Versão: {settings.versao}</p>

      <p>Idioma: {settings.idioma}</p>

    </div>

  );

};

export default GeneralSettings;