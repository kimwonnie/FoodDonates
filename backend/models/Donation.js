import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    doador: {
      type: String,
      required: true
    },

    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },

    descricao: {
      type: String,
      required: true
    },

    quantidade: {
      type: Number,
      required: true
    },

    unidade: {
      type: String,
      default: "un"
    },

    status: {
      type: String,
      enum: [
        "PENDENTE",
        "APROVADA",
        "ENTREGUE"
      ],
      default: "PENDENTE"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Donation",
  donationSchema
);