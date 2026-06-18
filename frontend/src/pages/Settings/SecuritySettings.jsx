import { useState } from "react";

const SecuritySettings = () => {

  const [security, setSecurity] = useState({

    tamanhoMinimoSenha: 8,
    exigirMaiuscula: true,
    exigirNumero: true,
    exigirEspecial: true,
    autenticacaoDoisFatores: false

  });

  return (

    <div>

      <h1>Configurações de Segurança</h1>

      <p>Senha mínima: {security.tamanhoMinimoSenha}</p>

      <p>Exigir maiúscula: Sim</p>

      <p>Exigir número: Sim</p>

      <p>Exigir caractere especial: Sim</p>

      <p>2FA: Desativado</p>

    </div>

  );

};

export default SecuritySettings;