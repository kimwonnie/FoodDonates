import { useState } from "react";

const ResetPassword = () => {

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(password);

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Nova Senha</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
          />

          <button type="submit">
            Alterar Senha
          </button>

        </form>

      </div>

    </div>

  );

};

export default ResetPassword;