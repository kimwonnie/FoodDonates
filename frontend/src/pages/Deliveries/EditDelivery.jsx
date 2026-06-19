import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import TextArea from "../../components/Forms/TextArea";
import FormButtons from "../../components/Forms/FormButtons";

const EditDelivery = () => {

const [form, setForm] = useState({

familia: "Maria Silva",

responsavelFamilia: "Maria Silva",

ong: "ONG Esperança",

alimento: "Arroz",

quantidade: 20,

unidade: "Kg",

dataEntrega: "2026-06-10",

responsavelEntrega: "Carlos Souza",

comprovante: "COMP-001",

status: "ENTREGUE",

observacoes:
  "Entrega realizada com sucesso."


});

const handleChange = (e) => {


setForm({
  ...form,
  [e.target.name]: e.target.value
});


};

const handleSubmit = (e) => {


e.preventDefault();

console.log("Atualizar Entrega");

console.log(form);


};

return (


<div>

  <h1>Editar Entrega</h1>

  <form onSubmit={handleSubmit}>

    <h2>Família Beneficiada</h2>

    <Input
      label="Família"
      name="familia"
      value={form.familia}
      onChange={handleChange}
    />

    <Input
      label="Responsável da Família"
      name="responsavelFamilia"
      value={form.responsavelFamilia}
      onChange={handleChange}
    />

    <h2>Origem da Entrega</h2>

    <Input
      label="ONG Responsável"
      name="ong"
      value={form.ong}
      onChange={handleChange}
    />

    <Input
      label="Alimento"
      name="alimento"
      value={form.alimento}
      onChange={handleChange}
    />

    <Input
      type="number"
      label="Quantidade"
      name="quantidade"
      value={form.quantidade}
      onChange={handleChange}
    />

    <Select
      label="Unidade"
      name="unidade"
      value={form.unidade}
      onChange={handleChange}
      options={[
        { value: "Kg", label: "Kg" },
        { value: "Unidade", label: "Unidade" },
        { value: "Caixa", label: "Caixa" },
        { value: "Litro", label: "Litro" }
      ]}
    />

    <h2>Entrega</h2>

    <Input
      type="date"
      label="Data da Entrega"
      name="dataEntrega"
      value={form.dataEntrega}
      onChange={handleChange}
    />

    <Input
      label="Responsável pela Entrega"
      name="responsavelEntrega"
      value={form.responsavelEntrega}
      onChange={handleChange}
    />

    <Input
      label="Comprovante"
      name="comprovante"
      value={form.comprovante}
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
          value: "EM_TRANSPORTE",
          label: "Em Transporte"
        },
        {
          value: "ENTREGUE",
          label: "Entregue"
        },
        {
          value: "CANCELADA",
          label: "Cancelada"
        }
      ]}
    />

    <TextArea
      label="Observações"
      name="observacoes"
      value={form.observacoes}
      onChange={handleChange}
    />

    <FormButtons
      submitText="Atualizar Entrega"
    />

  </form>

</div>


);

};

export default EditDelivery;
