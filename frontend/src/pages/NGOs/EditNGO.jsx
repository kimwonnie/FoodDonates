import { useState } from "react";

import Input from "../../components/Forms/Input";
import TextArea from "../../components/Forms/TextArea";
import FormButtons from "../../components/Forms/FormButtons";

const EditNGO = () => {

  const [form, setForm] = useState({
    nome: "ONG Esperança",
    cnpj: "00.000.000/0001-00",
    email: "contato@ong.com",
    telefone: "(91)99999-9999",
    endereco: "Belém - PA",
    descricao: "Descrição da ONG"
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

      <h1>Editar ONG</h1>

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

        <FormButtons
          submitText="Atualizar"
        />

      </form>

    </div>

  );
};

export default EditNGO;