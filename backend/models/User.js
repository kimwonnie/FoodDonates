import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    senha: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["ADMIN", "MANAGER", "USER"],
      default: "USER"
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE"
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("senha")) return next();

  this.senha = await bcrypt.hash(this.senha, 10);

  next();
});

userSchema.methods.comparePassword = async function (
  password
) {
  return bcrypt.compare(password, this.senha);
};

export default mongoose.model("User", userSchema);