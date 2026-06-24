import User from "../models/User.js";
import jwtService from "../services/jwtService.js";
import logService from "../services/logService.js";
import { isValidEmail, isStrongPassword } from "../utils/validators.js";

class AuthController {
  // ==========================
  // LOGIN
  // ==========================
  async login(req, res, next) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({
          success: false,
          message: "Email e senha são obrigatórios",
        });
      }

      const emailNormalized = email.toLowerCase();
      const user = await User.findOne({ email: emailNormalized });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Email ou senha inválidos",
        });
      }

      const passwordMatch = await user.comparePassword(senha);
      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: "Email ou senha inválidos",
        });
      }

      const token = jwtService.generateToken({
        id: user._id,
        role: user.role,
      });

      await logService.info("AuthController", "Login realizado", {
        userId: user._id,
      });

      return res.status(200).json({
        success: true,
        token,
        user: {
          id: user._id,
          nome: user.nome,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      await logService.error("AuthController", "Erro no login", { error });
      next(error);
    }
  }

  // ==========================
  // REGISTER
  // ==========================
  async register(req, res, next) {
    try {
      const { nome, email, senha, role } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({
          success: false,
          message: "Campos obrigatórios",
        });
      }

      const emailNormalized = email.toLowerCase();

      if (!isValidEmail(emailNormalized)) {
        return res.status(400).json({
          success: false,
          message: "Email inválido",
        });
      }

      if (!isStrongPassword(senha)) {
        return res.status(400).json({
          success: false,
          message: "Senha fraca",
        });
      }

      const exists = await User.findOne({ email: emailNormalized });
      if (exists) {
        return res.status(409).json({
          success: false,
          message: "Usuário já existe",
        });
      }

      const user = await User.create({
        nome,
        email: emailNormalized,
        senha,
        role,
      });

      await logService.info("AuthController", "Usuário criado", {
        userId: user._id,
      });

      return res.status(201).json({
        success: true,
        message: "Usuário criado com sucesso",
        user: {
          id: user._id,
          nome: user.nome,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      await logService.error("AuthController", "Erro no registro", { error });
      next(error);
    }
  }

  // ==========================
  // PERFIL
  // ==========================
  async profile(req, res, next) {
    try {
      const user = await User.findById(req.user.id).select("-senha");
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      await logService.error("AuthController", "Erro ao buscar perfil", { error });
      next(error);
    }
  }

  // ==========================
  // ALTERAR SENHA
  // ==========================
  async changePassword(req, res, next) {
    try {
      const { senhaAtual, novaSenha } = req.body;
      const user = await User.findById(req.user.id);

      const valid = await user.comparePassword(senhaAtual);
      if (!valid) {
        return res.status(400).json({
          success: false,
          message: "Senha atual incorreta",
        });
      }

      if (!isStrongPassword(novaSenha)) {
        return res.status(400).json({
          success: false,
          message: "Nova senha fraca",
        });
      }

      user.senha = novaSenha;
      await user.save();

      await logService.info("AuthController", "Senha alterada", {
        userId: user._id,
      });

      return res.status(200).json({
        success: true,
        message: "Senha alterada com sucesso",
      });
    } catch (error) {
      await logService.error("AuthController", "Erro ao alterar senha", { error });
      next(error);
    }
  }

  // ==========================
  // LOGOUT
  // ==========================
  async logout(req, res) {
    return res.status(200).json({
      success: true,
      message: "Logout realizado",
    });
  }
}

export default new AuthController();
