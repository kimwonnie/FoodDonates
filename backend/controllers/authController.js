import User from "../models/User.js";
import jwtService from "../services/jwtService.js";
import logService from "../services/logService.js";
import { isValidEmail, isStrongPassword } from "../utils/validators.js";

class AuthController {
  async login(req, res, next) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ message: "Email e senha são obrigatórios" });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
      }

      const passwordMatch = await user.comparePassword(senha);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
      }

      const token = jwtService.generateToken({
        id: user._id,
        role: user.role,
      });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async register(req, res, next) {
    try {
      const { nome, email, senha, role } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Campos obrigatórios" });
      }

      const user = await User.create({ nome, email, senha, role });

      return res.status(201).json({ message: "Usuário criado" });
    } catch (error) {
      next(error);
    }
  }

  async profile(req, res) {
    const user = await User.findById(req.user._id).select("-senha");
    return res.json(user);
  }

  async changePassword(req, res) {
    const { senhaAtual, novaSenha } = req.body;

    const user = await User.findById(req.user._id);

    const valid = await user.comparePassword(senhaAtual);

    if (!valid) {
      return res.status(400).json({ message: "Senha incorreta" });
    }

    user.senha = novaSenha;
    await user.save();

    return res.json({ message: "Senha alterada" });
  }

  async logout(req, res) {
    return res.json({ message: "Logout ok" });
  }
}

export default new AuthController();