import { useState } from "react";

const SecuritySettings = () => {

  const [security] = useState({
    tamanhoMinimoSenha: 8,
    exigirMaiuscula: true,
    exigirNumero: true,
    exigirEspecial: true,
    autenticacaoDoisFatores: false
  });

  return (
    <div>

      <h1>Configurações de Segurança</h1>

      <hr />

      <p>
        <strong>Senha mínima:</strong> {security.tamanhoMinimoSenha}
      </p>

      <p>
        <strong>Exigir maiúscula:</strong>{" "}
        {security.exigirMaiuscula ? "Sim" : "Não"}
      </p>

      <p>
        <strong>Exigir número:</strong>{" "}
        {security.exigirNumero ? "Sim" : "Não"}
      </p>

      <p>
        <strong>Exigir caractere especial:</strong>{" "}
        {security.exigirEspecial ? "Sim" : "Não"}
      </p>

      <p>
        <strong>Autenticação em dois fatores:</strong>{" "}
        {security.autenticacaoDoisFatores ? "Ativado" : "Desativado"}
      </p>

    </div>
  );
};

export default SecuritySettings;