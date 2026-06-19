import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // 🔐 validação básica
    if (form.senha !== form.confirmarSenha) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      setLoading(true);

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          senha: form.senha
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao criar conta");
      }

      setMessage("Conta criada com sucesso!");

      // 🚀 redireciona para login
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      console.error(err);
      setError("Não foi possível criar a conta");
    } finally {
      setLoading(false);
    }
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
            value={form.nome}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            value={form.confirmarSenha}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Criando conta..." : "Cadastrar"}
          </button>

        </form>

        {message && (
          <p style={{ color: "green", marginTop: "10px" }}>
            {message}
          </p>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}

      </div>

    </div>
  );
};

export default Register;