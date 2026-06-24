import jwt from "jsonwebtoken";
import env from "../config/env.js";

class JwtService {
  // ==========================
  // GERAR TOKEN
  // ==========================
  generateToken(payload) {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });
  }

  // ==========================
  // VERIFICAR TOKEN
  // ==========================
  verifyToken(token) {
    try {
      return jwt.verify(token, env.JWT_SECRET);
    } catch (error) {
      return null; // retorna null se inválido ou expirado
    }
  }

  // ==========================
  // DECODIFICAR TOKEN SEM VERIFICAR
  // ==========================
  decodeToken(token) {
    return jwt.decode(token);
  }
}

export default new JwtService();
