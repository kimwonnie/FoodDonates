import { useState } from "react";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar email de recuperação");
      }

      setMessage("Se o email existir, você receberá um link de recuperação.");

      setEmail("");

    } catch (err) {
      console.error(err);
      setError("Não foi possível processar a solicitação");
    } finally {
      setLoading(false);
    }
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
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Link"}
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

export default ForgotPassword;