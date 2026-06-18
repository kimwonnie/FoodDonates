import { useState } from "react";

import Input from "../../components/Forms/Input";
import FormButtons from "../../components/Forms/FormButtons";

const EditProfile = () => {

  const [form, setForm] = useState({

    nome: "Williams Santos",
    email: "williams@email.com",
    telefone: "(91)99999-9999"

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

      <h1>Editar Perfil</h1>

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
          submitText="Salvar Alterações"
        />

      </form>

    </div>

  );

};

export default EditProfile;