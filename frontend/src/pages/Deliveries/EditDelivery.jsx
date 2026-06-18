import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import FormButtons from "../../components/Forms/FormButtons";

const EditDelivery = () => {

  const [form, setForm] = useState({
    familia: "Maria Silva",
    doacao: "Cesta Básica",
    dataEntrega: "2026-06-10",
    responsavel: "Carlos Souza",
    status: "ENTREGUE"
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

      <h1>Editar Entrega</h1>

      <form onSubmit={handleSubmit}>

        <Input
          label="Família"
          name="familia"
          value={form.familia}
          onChange={handleChange}
        />

        <Input
          label="Doação"
          name="doacao"
          value={form.doacao}
          onChange={handleChange}
        />

        <Input
          type="date"
          label="Data da Entrega"
          name="dataEntrega"
          value={form.dataEntrega}
          onChange={handleChange}
        />

        <Input
          label="Responsável"
          name="responsavel"
          value={form.responsavel}
          onChange={handleChange}
        />

        <Select
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
          options={[
            {
              value: "PENDENTE",
              label: "Pendente"
            },
            {
              value: "ENTREGUE",
              label: "Entregue"
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

export default EditDelivery;