import { useState } from "react";

import Input from "../../components/Forms/Input";
import FormButtons from "../../components/Forms/FormButtons";

const ChangePassword = () => {

  const [form, setForm] = useState({

    currentPassword: "",
    newPassword: "",
    confirmPassword: ""

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

      <h1>Alterar Senha</h1>

      <form onSubmit={handleSubmit}>

        <Input
          type="password"
          label="Senha Atual"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
        />

        <Input
          type="password"
          label="Nova Senha"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
        />

        <Input
          type="password"
          label="Confirmar Nova Senha"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <FormButtons
          submitText="Alterar Senha"
        />

      </form>

    </div>

  );

};

export default ChangePassword;