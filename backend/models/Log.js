import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    nivel: {
      type: String,
      enum: [
        "INFO",
        "WARNING",
        "ERROR",
        "CRITICAL"
      ],
      default: "INFO"
    },

    origem: {
      type: String,
      required: true
    },

    mensagem: {
      type: String,
      required: true
    },

    stack: {
      type: String
    },

    metadata: {
      type: Object,
      default: {}
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Log",
  logSchema
);