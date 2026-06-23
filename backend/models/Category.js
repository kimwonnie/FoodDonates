import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      unique: true
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
  "Category",
  categorySchema
);