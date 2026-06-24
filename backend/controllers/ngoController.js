import Ngo from "../models/NGO.js";
import logService from "../services/logService.js";

class NgoController {

  // ==========================
  // LISTAR ONGs
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
              { nome: { $regex: search, $options: "i" } },
              { cnpj: { $regex: search, $options: "i" } },
              { responsavel: { $regex: search, $options: "i" } }
            ]
          }
        : {};

      const ngos = await Ngo.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

      const total = await Ngo.countDocuments(filter);

      return res.status(200).json({
        success: true,
        data: ngos,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
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
      const ngo = await Ngo.findById(req.params.id);

      if (!ngo) {
        return res.status(404).json({
          success: false,
          message: "ONG não encontrada"
        });
      }

      return res.status(200).json({
        success: true,
        data: ngo
      });

    } catch (error) {
      next(error);
    }
  }

  // ==========================
  // CRIAR ONG
  // ==========================
  async create(req, res, next) {
    try {
      const {
        nome,
        cnpj,
        email,
        telefone,
        endereco,
        responsavel
      } = req.body;

      const exists = await Ngo.findOne({ cnpj });

      if (exists) {
        return res.status(409).json({
          success: false,
          message: "CNPJ já cadastrado"
        });
      }

      const ngo = await Ngo.create({
        nome,
        cnpj,
        email,
        telefone,
        endereco,
        responsavel
      });

      await logService.info("NgoController", "ONG cadastrada", {
        ngoId: ngo._id
      });

      return res.status(201).json({
        success: true,
        data: ngo
      });

    } catch (error) {
      next(error);
    }
  }

  // ==========================
  // ATUALIZAR ONG
  // ==========================
  async update(req, res, next) {
    try {
      const ngo = await Ngo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!ngo) {
        return res.status(404).json({
          success: false,
          message: "ONG não encontrada"
        });
      }

      await logService.info("NgoController", "ONG atualizada", {
        ngoId: ngo._id
      });

      return res.status(200).json({
        success: true,
        data: ngo
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
      const ngo = await Ngo.findById(req.params.id);

      if (!ngo) {
        return res.status(404).json({
          success: false,
          message: "ONG não encontrada"
        });
      }

      ngo.status = ngo.status === "ATIVA" ? "INATIVA" : "ATIVA";

      await ngo.save();

      await logService.info("NgoController", "Status da ONG alterado", {
        ngoId: ngo._id,
        status: ngo.status
      });

      return res.status(200).json({
        success: true,
        data: ngo
      });

    } catch (error) {
      next(error);
    }
  }

  // ==========================
  // DELETAR ONG
  // ==========================
  async delete(req, res, next) {
    try {
      const ngo = await Ngo.findByIdAndDelete(req.params.id);

      if (!ngo) {
        return res.status(404).json({
          success: false,
          message: "ONG não encontrada"
        });
      }

      await logService.info("NgoController", "ONG removida", {
        ngoId: ngo._id
      });

      return res.status(200).json({
        success: true,
        message: "ONG removida com sucesso"
      });

    } catch (error) {
      next(error);
    }
  }
}

export default new NgoController();