import User from "../models/User.js";

import logService from "../services/logService.js";

class UserController {

  // ==========================
  // LISTAR USUÁRIOS
  // ==========================
  async getAll(req, res, next) {

    try {

      const page =
        parseInt(req.query.page) || 1;

      const limit =
        parseInt(req.query.limit) || 10;

      const skip =
        (page - 1) * limit;

      const search =
        req.query.search || "";

      const filter = search
        ? {
            $or: [
              {
                nome: {
                  $regex: search,
                  $options: "i"
                }
              },
              {
                email: {
                  $regex: search,
                  $options: "i"
                }
              }
            ]
          }
        : {};

      const users =
        await User.find(filter)
          .select("-senha")
          .skip(skip)
          .limit(limit)
          .sort({
            createdAt: -1
          });

      const total =
        await User.countDocuments(
          filter
        );

      return res.status(200).json({
        success: true,
        data: users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(
            total / limit
          )
        }
      });

    } catch (error) {

      next(error);

    }

  }

  // ==========================
  // BUSCAR POR ID
  // ==========================
  async getById(req, res, next) {

    try {

      const user =
        await User.findById(
          req.params.id
        ).select("-senha");

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "Usuário não encontrado"
        });

      }

      return res.status(200).json({
        success: true,
        data: user
      });

    } catch (error) {

      next(error);

    }

  }

  // ==========================
  // CRIAR USUÁRIO
  // ==========================
  async create(req, res, next) {

    try {

      const {
        nome,
        email,
        senha,
        role
      } = req.body;

      const exists =
        await User.findOne({
          email
        });

      if (exists) {

        return res.status(409).json({
          success: false,
          message:
            "Email já cadastrado"
        });

      }

      const user =
        await User.create({
          nome,
          email,
          senha,
          role
        });

      await logService.info(
        "UserController",
        "Usuário criado",
        {
          userId: user._id
        }
      );

      return res.status(201).json({
        success: true,
        data: user
      });

    } catch (error) {

      next(error);

    }

  }

  // ==========================
  // ATUALIZAR USUÁRIO
  // ==========================
  async update(req, res, next) {

    try {

      const {
        nome,
        email,
        role
      } = req.body;

      const user =
        await User.findByIdAndUpdate(
          req.params.id,
          {
            nome,
            email,
            role
          },
          {
            new: true,
            runValidators: true
          }
        ).select("-senha");

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "Usuário não encontrado"
        });

      }

      await logService.info(
        "UserController",
        "Usuário atualizado",
        {
          userId: user._id
        }
      );

      return res.status(200).json({
        success: true,
        data: user
      });

    } catch (error) {

      next(error);

    }

  }

  // ==========================
  // ALTERAR STATUS
  // ==========================
  async toggleStatus(
    req,
    res,
    next
  ) {

    try {

      const user =
        await User.findById(
          req.params.id
        );

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "Usuário não encontrado"
        });

      }

      user.status =
        user.status === "ACTIVE"
          ? "INACTIVE"
          : "ACTIVE";

      await user.save();

      await logService.info(
        "UserController",
        "Status alterado",
        {
          userId: user._id,
          status:
            user.status
        }
      );

      return res.status(200).json({
        success: true,
        data: user
      });

    } catch (error) {

      next(error);

    }

  }

  // ==========================
  // EXCLUIR USUÁRIO
  // ==========================
  async delete(req, res, next) {

    try {

      const user =
        await User.findByIdAndDelete(
          req.params.id
        );

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "Usuário não encontrado"
        });

      }

      await logService.info(
        "UserController",
        "Usuário removido",
        {
          userId: user._id
        }
      );

      return res.status(200).json({
        success: true,
        message:
          "Usuário removido com sucesso"
      });

    } catch (error) {

      next(error);

    }

  }

}

export default new UserController();