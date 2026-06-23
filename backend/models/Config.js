import mongoose from "mongoose";

const configSchema = new mongoose.Schema(
  {
    chave: {
      type: String,
      required: true,
      unique: true
    },

    valor: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },

    descricao: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Config",
  configSchema
);