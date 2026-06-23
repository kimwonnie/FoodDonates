import { useState } from "react";

import Input from "../../components/Forms/Input";
import Select from "../../components/Forms/Select";
import FormButtons from "../../components/Forms/FormButtons";

const CreateUser = () => {

const [form, setForm] = useState({


nome: "",

email: "",

telefone: "",

senha: "",

confirmarSenha: "",

perfil: "DOADOR",

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

if (form.senha !== form.confirmarSenha) {

  alert("As senhas não coincidem.");

  return;

}

console.log("Cadastrar Usuário");

console.log(form);


};

return (


<div>

  <h1>Cadastrar Usuário</h1>

  <p>
    Cadastre novos usuários para acessar a plataforma.
  </p>

  <form onSubmit={handleSubmit}>

    <Input
      label="Nome Completo"
      name="nome"
      value={form.nome}
      onChange={handleChange}
    />

    <Input
      label="E-mail"
      type="email"
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
      label="Senha"
      type="password"
      name="senha"
      value={form.senha}
      onChange={handleChange}
    />

    <Input
      label="Confirmar Senha"
      type="password"
      name="confirmarSenha"
      value={form.confirmarSenha}
      onChange={handleChange}
    />

    <Select
      label="Perfil"
      name="perfil"
      value={form.perfil}
      onChange={handleChange}
      options={[
        {
          value: "ADMIN",
          label: "Administrador"
        },
        {
          value: "GESTOR_ONG",
          label: "Gestor de ONG"
        },
        {
          value: "VOLUNTARIO",
          label: "Voluntário"
        },
        {
          value: "DOADOR",
          label: "Doador"
        }
      ]}
    />

    <Select
      label="Status"
      name="status"
      value={form.status}
      onChange={handleChange}
      options={[
        {
          value: "ATIVO",
          label: "Ativo"
        },
        {
          value: "INATIVO",
          label: "Inativo"
        }
      ]}
    />

    <FormButtons
      submitText="Cadastrar Usuário"
    />

  </form>

</div>


);

};

export default CreateUser;
