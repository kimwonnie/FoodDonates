import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import FormButtons from "../../components/Forms/FormButtons";

const EditUser = () => {

  const { id } = useParams();

  const initialState = {
    nome: "",
    email: "",
    perfil: "",
    status: "ATIVO"
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔌 Buscar usuário pelo ID
  const fetchUser = async () => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:3000/users/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar usuário");
      }

      const data = await response.json();

      setForm({
        nome: data.nome || "",
        email: data.email || "",
        perfil: data.perfil || "",
        status: data.status || "ATIVO"
      });

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar usuário");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!form.nome.trim()) return "Nome é obrigatório";
    if (!form.email.trim()) return "Email é obrigatório";
    if (!form.perfil) return "Perfil é obrigatório";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const payload = {
      nome: form.nome.trim(),
      email: form.email.trim().toLowerCase(),
      perfil: form.perfil,
      status: form.status
    };

    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:3000/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar usuário");
      }

      const data = await response.json();

      console.log("Usuário atualizado:", data);

    } catch (err) {
      console.error(err);
      setError("Erro ao atualizar usuário");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !form.nome) {
    return <p>Carregando usuário...</p>;
  }

  return (
    <div>

      <h1>Editar Usuário</h1>

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

        <Select
          label="Perfil"
          name="perfil"
          value={form.perfil}
          onChange={handleChange}
          options={[
            { value: "ADMIN", label: "Administrador" },
            { value: "ONG", label: "ONG" },
            { value: "DOADOR", label: "Doador" },
            { value: "OPERADOR", label: "Operador" }
          ]}
        />

        <Select
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
          options={[
            { value: "ATIVO", label: "Ativo" },
            { value: "INATIVO", label: "Inativo" }
          ]}
        />

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}

        <FormButtons submitText="Atualizar" />

      </form>

    </div>
  );
};

export default EditUser;