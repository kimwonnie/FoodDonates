import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
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

        <h1>Plataforma Solidária</h1>

        <h2>Entrar</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">
            Entrar
          </button>

        </form>

        <Link to="/forgot-password">
          Esqueci minha senha
        </Link>

        <p>

          Não possui conta?

          <Link to="/register">
            Cadastre-se
          </Link>

        </p>

      </div>

    </div>

  );

};

export default Login;