import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import FormButtons from "../../components/Forms/FormButtons";

const EditUser = () => {

  const [form, setForm] = useState({
    nome: "Administrador",
    email: "admin@plataforma.com",
    perfil: "ADMIN",
    status: "ATIVO"
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
            {
              value: "ADMIN",
              label: "Administrador"
            },
            {
              value: "ONG",
              label: "ONG"
            },
            {
              value: "DOADOR",
              label: "Doador"
            },
            {
              value: "OPERADOR",
              label: "Operador"
            }
          ]}
        />

        <FormButtons
          submitText="Atualizar"
        />

      </form>

    </div>

  );
};

export default EditUser;