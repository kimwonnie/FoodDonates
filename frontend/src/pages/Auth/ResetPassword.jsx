import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 🔑 token vindo do link do email
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // 🔐 validação básica
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (!token) {
      setError("Token inválido ou expirado");
      return;
    }

    try {
      setLoading(true);

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token,
          password
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao redefinir senha");
      }

      setMessage("Senha alterada com sucesso!");

      // 🚀 volta para login
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      console.error(err);
      setError("Não foi possível alterar a senha");
    } finally {
      setLoading(false);
    }
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
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Alterando..." : "Alterar Senha"}
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

export default ResetPassword;