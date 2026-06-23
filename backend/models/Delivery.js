import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    familia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Family",
      required: true
    },

    doacao: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donation",
      required: true
    },

    dataEntrega: {
      type: Date,
      default: Date.now
    },

    observacoes: {
      type: String
    },

    status: {
      type: String,
      enum: [
        "PENDENTE",
        "EM_TRANSITO",
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
  "Delivery",
  deliverySchema
);