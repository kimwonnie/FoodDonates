import Family from "../models/Family.js";
import logService from "../services/logService.js";

class FamilyController {

  // ==========================
  // LISTAR FAMÍLIAS
  // ==========================
  async getAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const search = req.query.search || "";

      const filter = search
        ? {
            $or: [
              { responsavel: { $regex: search, $options: "i" } },
              { cpf: { $regex: search, $options: "i" } }
            ]
          }
        : {};

      const families = await Family.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

      const total = await Family.countDocuments(filter);

      return res.status(200).json({
        success: true,
        data: families,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
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
      const family = await Family.findById(req.params.id);

      if (!family) {
        return res.status(404).json({
          success: false,
          message: "Família não encontrada",
        });
      }

      return res.status(200).json({
        success: true,
        data: family,
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
      const {
        responsavel,
        cpf,
        telefone,
        endereco,
        membros,
        rendaMensal,
      } = req.body;

      const exists = await Family.findOne({ cpf });

      if (exists) {
        return res.status(409).json({
          success: false,
          message: "CPF já cadastrado",
        });
      }

      const family = await Family.create({
        responsavel,
        cpf,
        telefone,
        endereco,
        membros,
        rendaMensal,
      });

      await logService.info("FamilyController", "Família criada", {
        familyId: family._id,
      });

      return res.status(201).json({
        success: true,
        data: family,
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
      const family = await Family.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!family) {
        return res.status(404).json({
          success: false,
          message: "Família não encontrada",
        });
      }

      await logService.info("FamilyController", "Família atualizada", {
        familyId: family._id,
      });

      return res.status(200).json({
        success: true,
        data: family,
      });

    } catch (error) {
      next(error);
    }
  }

  // ==========================
  // TOGGLE STATUS
  // ==========================
  async toggleStatus(req, res, next) {
    try {
      const family = await Family.findById(req.params.id);

      if (!family) {
        return res.status(404).json({
          success: false,
          message: "Família não encontrada",
        });
      }

      family.status = family.status === "ATIVA" ? "INATIVA" : "ATIVA";

      await family.save();

      await logService.info("FamilyController", "Status alterado", {
        familyId: family._id,
        status: family.status,
      });

      return res.status(200).json({
        success: true,
        data: family,
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
      const family = await Family.findByIdAndDelete(req.params.id);

      if (!family) {
        return res.status(404).json({
          success: false,
          message: "Família não encontrada",
        });
      }

      await logService.info("FamilyController", "Família removida", {
        familyId: family._id,
      });

      return res.status(200).json({
        success: true,
        message: "Família removida com sucesso",
      });

    } catch (error) {
      next(error);
    }
  }
}

export default new FamilyController();