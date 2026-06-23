import mongoose from "mongoose";

const familySchema = new mongoose.Schema(
  {
    responsavel: {
      type: String,
      required: true
    },

    cpf: {
      type: String,
      unique: true,
      required: true
    },

    telefone: String,

    endereco: String,

    membros: {
      type: Number,
      default: 1
    },

    rendaMensal: {
      type: Number,
      default: 0
    },

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
  "Family",
  familySchema
);