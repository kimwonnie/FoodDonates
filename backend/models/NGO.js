import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },

    cnpj: {
      type: String,
      required: true,
      unique: true
    },

    email: String,

    telefone: String,

    endereco: String,

    responsavel: String,

    status: {
      type: String,
      enum: ["ATIVA", "INATIVA"],
      default: "ATIVA"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Ngo",
  ngoSchema
);