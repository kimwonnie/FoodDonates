export const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("pt-BR");
};

export const formatCurrency = (value) => {
  if (value === null || value === undefined) return "R$ 0,00";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
};

export const formatText = (text) => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};