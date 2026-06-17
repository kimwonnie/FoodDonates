import { useState } from "react";

const Register = () => {

  const [form, setForm] = useState({

    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""

  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(form);

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Criar Conta</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nome"
            placeholder="Nome Completo"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            onChange={handleChange}
          />

          <button type="submit">
            Cadastrar
          </button>

        </form>

      </div>

    </div>

  );

};

export default Register;