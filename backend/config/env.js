import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  DB_NAME: process.env.DB_NAME || "plataforma_solidaria",

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",

  NODE_ENV: process.env.NODE_ENV || "development",
};

export default env;