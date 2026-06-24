import Category from "../models/Category.js";
import logService from "../services/logService.js";

class CategoryController {

  // ==========================
  // LISTAR
  // ==========================
  async getAll(req, res, next) {
    try {
      const categories = await Category.find().sort({ nome: 1 });

      return res.status(200).json({
        success: true,
        data: categories,
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
      const category = await Category.findById(req.params.id);

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Categoria não encontrada",
        });
      }

      return res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  // ==========================
  // CRIAR
  // ==========================
  async create(req, res, next) {
    try {
      const { nome, descricao } = req.body;

      const exists = await Category.findOne({ nome });

      if (exists) {
        return res.status(409).json({
          success: false,
          message: "Categoria já cadastrada",
        });
      }

      const category = await Category.create({ nome, descricao });

      await logService.info("CategoryController", "Categoria criada", {
        categoryId: category._id,
      });

      return res.status(201).json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  // ==========================
  // ATUALIZAR
  // ==========================
  async update(req, res, next) {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Categoria não encontrada",
        });
      }

      await logService.info("CategoryController", "Categoria atualizada", {
        categoryId: category._id,
      });

      return res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  // ==========================
  // DELETAR
  // ==========================
  async delete(req, res, next) {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Categoria não encontrada",
        });
      }

      await logService.info("CategoryController", "Categoria removida", {
        categoryId: category._id,
      });

      return res.status(200).json({
        success: true,
        message: "Categoria removida com sucesso",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();