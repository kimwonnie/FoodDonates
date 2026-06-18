import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import TextArea from "../../components/Forms/TextArea";
import FormButtons from "../../components/Forms/FormButtons";

const EditNGO = () => {

const [form, setForm] = useState({


nome: "ONG Esperança",

cnpj: "00.000.000/0001-00",

responsavel: "Ana Souza",

email: "contato@ong.com",

telefone: "(91)99999-9999",

cep: "66000-000",

endereco: "Rua das Flores",

bairro: "Centro",

cidade: "Belém",

estado: "PA",

capacidadeArmazenamento: "5000",

familiasAtendidas: "120",

tiposAlimentos:
  "Arroz, Feijão, Leite",

status: "Ativa",

descricao:
  "ONG voltada para assistência alimentar.",

observacoes:
  "Parceira ativa do projeto."


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

console.log("Atualizar ONG");

console.log(form);


};

return (


<div>

  <h1>Editar ONG</h1>

  <form onSubmit={handleSubmit}>

    <Input
      label="Nome da ONG"
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
      label="Responsável"
      name="responsavel"
      value={form.responsavel}
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
      label="CEP"
      name="cep"
      value={form.cep}
      onChange={handleChange}
    />

    <Input
      label="Endereço"
      name="endereco"
      value={form.endereco}
      onChange={handleChange}
    />

    <Input
      label="Bairro"
      name="bairro"
      value={form.bairro}
      onChange={handleChange}
    />

    <Input
      label="Cidade"
      name="cidade"
      value={form.cidade}
      onChange={handleChange}
    />

    <Input
      label="Estado"
      name="estado"
      value={form.estado}
      onChange={handleChange}
    />

    <Input
      type="number"
      label="Capacidade de Armazenamento (Kg)"
      name="capacidadeArmazenamento"
      value={form.capacidadeArmazenamento}
      onChange={handleChange}
    />

    <Input
      type="number"
      label="Famílias Atendidas"
      name="familiasAtendidas"
      value={form.familiasAtendidas}
      onChange={handleChange}
    />

    <Input
      label="Tipos de Alimentos Aceitos"
      name="tiposAlimentos"
      value={form.tiposAlimentos}
      onChange={handleChange}
    />

    <Select
      label="Status"
      name="status"
      value={form.status}
      onChange={handleChange}
      options={[
        {
          value: "Ativa",
          label: "Ativa"
        },
        {
          value: "Em análise",
          label: "Em análise"
        },
        {
          value: "Inativa",
          label: "Inativa"
        }
      ]}
    />

    <TextArea
      label="Descrição"
      name="descricao"
      value={form.descricao}
      onChange={handleChange}
    />

    <TextArea
      label="Observações"
      name="observacoes"
      value={form.observacoes}
      onChange={handleChange}
    />

    <FormButtons
      submitText="Atualizar ONG"
    />

  </form>

</div>


);

};

export default EditNGO;
