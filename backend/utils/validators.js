export const isValidEmail = (
  email
) => {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);

};

export const isValidCPF = (
  cpf
) => {

  cpf = cpf.replace(
    /\D/g,
    ""
  );

  return cpf.length === 11;
};

export const isValidCNPJ = (
  cnpj
) => {

  cnpj = cnpj.replace(
    /\D/g,
    ""
  );

  return cnpj.length === 14;
};

export const isStrongPassword = (
  password
) => {

  return (
    password &&
    password.length >= 6
  );

};

export const isEmpty = (
  value
) => {

  return (
    value === undefined ||
    value === null ||
    value === ""
  );

};