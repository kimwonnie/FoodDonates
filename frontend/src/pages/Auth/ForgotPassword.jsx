import { useState } from "react";

const ForgotPassword = () => {

  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(email);

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Recuperar Senha</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button type="submit">
            Enviar Link
          </button>

        </form>

      </div>

    </div>

  );

};

export default ForgotPassword;