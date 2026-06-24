import User from "../models/User.js";
import jwtService from "../services/jwtService.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Token não informado",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwtService.verifyToken(token);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Token inválido ou expirado",
      });
    }

    const user = await User.findById(decoded.id).select("-senha");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Usuário não encontrado",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Falha na autenticação",
    });
  }
};

export default authMiddleware;
