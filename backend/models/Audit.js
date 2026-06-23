import mongoose from "mongoose";

const auditSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    acao: {
      type: String,
      required: true
    },

    entidade: {
      type: String,
      required: true
    },

    entidadeId: {
      type: String
    },

    detalhes: {
      type: Object,
      default: {}
    },

    ip: {
      type: String
    },

    userAgent: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Audit",
  auditSchema
);