import User from "../models/User.js";

class UserController {

  async getAll(req, res, next) {
    try {
      const users = await User.find().select("-senha");
      return res.status(200).json({ success: true, data: users });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const user = await User.findById(req.params.id).select("-senha");

      if (!user) {
        return res.status(404).json({ success: false, message: "Usuário não encontrado" });
      }

      return res.status(200).json({ success: true, data: user });

    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({ success: true, data: user });

    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).select("-senha");

      if (!user) {
        return res.status(404).json({ success: false, message: "Usuário não encontrado" });
      }

      return res.status(200).json({ success: true, data: user });

    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(404).json({ success: false, message: "Usuário não encontrado" });
      }

      return res.status(200).json({ success: true, message: "Usuário removido" });

    } catch (error) {
      next(error);
    }
  }

  async toggleStatus(req, res, next) {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ success: false, message: "Usuário não encontrado" });
      }

      user.status = user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
      await user.save();

      return res.status(200).json({ success: true, data: user });

    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();