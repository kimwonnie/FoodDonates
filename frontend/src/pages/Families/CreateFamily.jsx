import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import TextArea from "../../components/Forms/TextArea";
import FormButtons from "../../components/Forms/FormButtons";

const CreateFamily = () => {

const [form, setForm] = useState({


responsavel: "",
cpf: "",
telefone: "",
email: "",

cep: "",
endereco: "",
bairro: "",
cidade: "",
estado: "",

membros: "",
criancas: "",
idosos: "",

rendaFamiliar: "",

vulnerabilidade: "",

observacoes: "",

status: "Ativa"


});

const handleChange = (e) => {

```
setForm({
  ...form,
  [e.target.name]: e.target.value
});
```

};

const handleSubmit = (e) => {

```
e.preventDefault();

console.log(form);
```

};

return (

```
<div>

  <h1>Cadastrar Família</h1>

  <form onSubmit={handleSubmit}>

    <Input
      label="Responsável"
      name="responsavel"
      value={form.responsavel}
      onChange={handleChange}
    />

    <Input
      label="CPF"
      name="cpf"
      value={form.cpf}
      onChange={handleChange}
    />

    <Input
      label="Telefone"
      name="telefone"
      value={form.telefone}
      onChange={handleChange}
    />

    <Input
      label="E-mail"
      name="email"
      value={form.email}
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
      label="Quantidade de Membros"
      name="membros"
      value={form.membros}
      onChange={handleChange}
    />

    <Input
      type="number"
      label="Quantidade de Crianças"
      name="criancas"
      value={form.criancas}
      onChange={handleChange}
    />

    <Input
      type="number"
      label="Quantidade de Idosos"
      name="idosos"
      value={form.idosos}
      onChange={handleChange}
    />

    <Input
      type="number"
      label="Renda Familiar"
      name="rendaFamiliar"
      value={form.rendaFamiliar}
      onChange={handleChange}
    />

    <Select
      label="Situação de Vulnerabilidade"
      name="vulnerabilidade"
      value={form.vulnerabilidade}
      onChange={handleChange}
      options={[
        {
          value: "Baixa renda",
          label: "Baixa renda"
        },
        {
          value: "Desemprego",
          label: "Desemprego"
        },
        {
          value: "Insegurança alimentar",
          label: "Insegurança alimentar"
        },
        {
          value: "Pessoa com deficiência",
          label: "Pessoa com deficiência"
        },
        {
          value: "Idosos dependentes",
          label: "Idosos dependentes"
        }
      ]}
    />

    <TextArea
      label="Observações"
      name="observacoes"
      value={form.observacoes}
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

    <FormButtons />

  </form>

</div>
```

);

};

export default CreateFamily;
