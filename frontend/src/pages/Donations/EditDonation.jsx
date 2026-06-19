import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import TextArea from "../../components/Forms/TextArea";
import FormButtons from "../../components/Forms/FormButtons";

const EditDonation = () => {

const [form, setForm] = useState({


tipoDoador: "PJ",

nomeDoador: "Supermercado Alfa",

cpfCnpj: "00.000.000/0001-00",

telefone: "(91)99999-9999",

email: "contato@alfa.com",

tipoAlimento: "ARROZ",

quantidade: 500,

unidade: "Kg",

dataFabricacao: "2026-01-01",

dataValidade: "2026-12-31",

dataDoacao: "2026-06-01",

ongDestino: "ONG Esperança",

status: "Recebida",

observacoes:
  "Doação recebida em perfeito estado."


});

const handleChange = (e) => {


setForm({

  ...form,

  [e.target.name]:
    e.target.value

});


};

const handleSubmit = (e) => {


e.preventDefault();

console.log("Atualizar Doação");

console.log(form);


};

return (


<div>

  <h1>Editar Doação</h1>

  <form onSubmit={handleSubmit}>

    <h2>Dados do Doador</h2>

    <Select
      label="Tipo de Doador"
      name="tipoDoador"
      value={form.tipoDoador}
      onChange={handleChange}
      options={[
        {
          value: "PF",
          label: "Pessoa Física"
        },
        {
          value: "PJ",
          label: "Pessoa Jurídica"
        }
      ]}
    />

    <Input
      label="Nome do Doador"
      name="nomeDoador"
      value={form.nomeDoador}
      onChange={handleChange}
    />

    <Input
      label="CPF/CNPJ"
      name="cpfCnpj"
      value={form.cpfCnpj}
      onChange={handleChange}
    />

    <Input
      label="Telefone"
      name="telefone"
      value={form.telefone}
      onChange={handleChange}
    />

    <Input
      label="Email"
      name="email"
      value={form.email}
      onChange={handleChange}
    />

    <h2>Dados do Alimento</h2>

    <Select
      label="Tipo de Alimento"
      name="tipoAlimento"
      value={form.tipoAlimento}
      onChange={handleChange}
      options={[
        {
          value: "ARROZ",
          label: "Arroz"
        },
        {
          value: "FEIJAO",
          label: "Feijão"
        },
        {
          value: "MACARRAO",
          label: "Macarrão"
        },
        {
          value: "LEITE",
          label: "Leite"
        }
      ]}
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
        {
          value: "Kg",
          label: "Kg"
        },
        {
          value: "Unidade",
          label: "Unidade"
        },
        {
          value: "Caixa",
          label: "Caixa"
        },
        {
          value: "Litro",
          label: "Litro"
        }
      ]}
    />

    <Input
      type="date"
      label="Data de Fabricação"
      name="dataFabricacao"
      value={form.dataFabricacao}
      onChange={handleChange}
    />

    <Input
      type="date"
      label="Data de Validade"
      name="dataValidade"
      value={form.dataValidade}
      onChange={handleChange}
    />

    <Input
      type="date"
      label="Data da Doação"
      name="dataDoacao"
      value={form.dataDoacao}
      onChange={handleChange}
    />

    <Input
      label="ONG Destino"
      name="ongDestino"
      value={form.ongDestino}
      onChange={handleChange}
    />

    <Select
      label="Status"
      name="status"
      value={form.status}
      onChange={handleChange}
      options={[
        {
          value: "Recebida",
          label: "Recebida"
        },
        {
          value: "Distribuída",
          label: "Distribuída"
        },
        {
          value: "Pendente",
          label: "Pendente"
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
      submitText="Atualizar Doação"
    />

  </form>

</div>


);

};

export default EditDonation;
