import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import FormButtons from "../../components/Forms/FormButtons";

const CreateFoodType = () => {

  const [form, setForm] = useState({

    nome: "",
    unidadeMedida: "",
    validadeDias: "",
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

      <h1>Cadastrar Alimento</h1>

      <form onSubmit={handleSubmit}>

        <Input
          label="Nome do Alimento"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <Select
          label="Unidade de Medida"
          name="unidadeMedida"
          value={form.unidadeMedida}
          onChange={handleChange}
          options={[
            { value: "kg", label: "Quilograma (kg)" },
            { value: "g", label: "Grama (g)" },
            { value: "l", label: "Litro (L)" },
            { value: "ml", label: "Mililitro (ml)" },
            { value: "un", label: "Unidade" }
          ]}
        />

        <Input
          type="number"
          label="Validade Padrão (dias)"
          name="validadeDias"
          value={form.validadeDias}
          onChange={handleChange}
        />

        <FormButtons />

      </form>

    </div>

  );
};

export default CreateFoodType;