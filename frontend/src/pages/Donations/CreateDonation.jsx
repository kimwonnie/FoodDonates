import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import TextArea from "../../components/Forms/TextArea";
import FormButtons from "../../components/Forms/FormButtons";

const CreateDonation = () => {

  const [form, setForm] = useState({
    item: "",
    categoria: "",
    quantidade: "",
    doador: "",
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

      <h1>Cadastrar Doação</h1>

      <form onSubmit={handleSubmit}>

        <Input
          label="Item"
          name="item"
          value={form.item}
          onChange={handleChange}
        />

        <Select
          label="Categoria"
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          options={[
            { value: "ALIMENTO", label: "Alimento" },
            { value: "ROUPA", label: "Roupa" },
            { value: "HIGIENE", label: "Higiene" },
            { value: "OUTRO", label: "Outro" }
          ]}
        />

        <Input
          label="Quantidade"
          name="quantidade"
          value={form.quantidade}
          onChange={handleChange}
        />

        <Input
          label="Doador"
          name="doador"
          value={form.doador}
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

export default CreateDonation;