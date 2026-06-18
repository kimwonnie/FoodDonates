import { useState } from "react";

import Input from "../../components/Forms/Input";
import TextArea from "../../components/Forms/TextArea";
import FormButtons from "../../components/Forms/FormButtons";

const CreateNGO = () => {

  const [form, setForm] = useState({
    nome: "",
    cnpj: "",
    email: "",
    telefone: "",
    endereco: "",
    descricao: ""
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

      <h1>Cadastrar ONG</h1>

      <form onSubmit={handleSubmit}>

        <Input
          label="Nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <Input
          label="CNPJ"
          name="cnpj"
          value={form.cnpj}
          onChange={handleChange}
        />

        <Input
          label="Email"
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

        <Input
          label="Endereço"
          name="endereco"
          value={form.endereco}
          onChange={handleChange}
        />

        <TextArea
          label="Descrição"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
        />

        <FormButtons />

      </form>

    </div>

  );
};

export default CreateNGO;