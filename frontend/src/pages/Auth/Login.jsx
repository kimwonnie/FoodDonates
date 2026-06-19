import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      // 🔌 backend ready (JWT login)
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();

      // 🔐 salvar token (base para próximo passo)
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // 🚀 redirecionamento após login
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
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

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>

        </form>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}

        <Link to="/forgot-password">
          Esqueci minha senha
        </Link>

        <p>
          Não possui conta?{" "}
          <Link to="/register">
            Cadastre-se
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;