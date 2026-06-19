import { useState } from "react";

import Input from "../../components/Forms/Input";
import FormButtons from "../../components/Forms/FormButtons";

const ChangePassword = () => {

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // 🔐 validação básica (front protection)
    if (form.newPassword !== form.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      setLoading(true);

      // 🔌 pronto para backend real (JWT)
      const response = await fetch("http://localhost:3000/profile/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao alterar senha");
      }

      setMessage("Senha alterada com sucesso!");

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });

    } catch (err) {
      console.error(err);
      setError("Não foi possível alterar a senha");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      <h1>Alterar Senha</h1>

      <hr />

      <form onSubmit={handleSubmit}>

        <Input
          type="password"
          label="Senha Atual"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
        />

        <Input
          type="password"
          label="Nova Senha"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
        />

        <Input
          type="password"
          label="Confirmar Nova Senha"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <FormButtons
          submitText={loading ? "Alterando..." : "Alterar Senha"}
        />

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
  );
};

export default ChangePassword;