import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import FormButtons from "../../components/Forms/FormButtons";

const EditFoodType = () => {

  const [form, setForm] = useState({

    nome: "Arroz",
    unidadeMedida: "kg",
    validadeDias: 365,
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

      <h1>Editar Alimento</h1>

      <form onSubmit={handleSubmit}>

        <Input
          label="Nome do Alimento"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <Select
          label="Unidade"
          name="unidadeMedida"
          value={form.unidadeMedida}
          onChange={handleChange}
          options={[
            { value: "kg", label: "Quilograma" },
            { value: "g", label: "Grama" },
            { value: "l", label: "Litro" },
            { value: "ml", label: "Mililitro" },
            { value: "un", label: "Unidade" }
          ]}
        />

        <Input
          type="number"
          label="Validade"
          name="validadeDias"
          value={form.validadeDias}
          onChange={handleChange}
        />

        <FormButtons
          submitText="Atualizar"
        />

      </form>

    </div>

  );
};

export default EditFoodType;