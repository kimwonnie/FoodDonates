import { useState } from "react";

import Input from "../../components/Forms/Input";
import FormButtons from "../../components/Forms/FormButtons";

const EditProfile = () => {

  const [form, setForm] = useState({
    nome: "Williams Santos",
    email: "williams@email.com",
    telefone: "(91)99999-9999"
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

    try {
      setLoading(true);

      // 🔐 pronto para backend real (JWT)
      const response = await fetch("http://localhost:3000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar perfil");
      }

      setMessage("Perfil atualizado com sucesso!");

    } catch (err) {
      console.error(err);
      setError("Não foi possível atualizar o perfil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      <h1>Editar Perfil</h1>

      <hr />

      <form onSubmit={handleSubmit}>

        <Input
          label="Nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <Input
          label="Telefone"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
        />

        <FormButtons
          submitText={loading ? "Salvando..." : "Salvar Alterações"}
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

export default EditProfile;