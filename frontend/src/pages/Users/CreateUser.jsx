import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import FormButtons from "../../components/Forms/FormButtons";

const CreateUser = () => {

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    perfil: "",
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

      <h1>Cadastrar Usuário</h1>

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
          label="Senha"
          type="password"
          name="senha"
          value={form.senha}
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

        <FormButtons />

      </form>

    </div>

  );
};

export default CreateUser;