import Config from "../models/Config.js";

class ConfigController {

  async getAll(req, res, next) {
    try {
      const configs = await Config.find();
      return res.status(200).json({ success: true, data: configs });
    } catch (error) {
      next(error);
    }
  }

  async getByKey(req, res, next) {
    try {
      const config = await Config.findOne({ chave: req.params.chave });

      if (!config) {
        return res.status(404).json({ success: false, message: "Não encontrada" });
      }

      return res.status(200).json({ success: true, data: config });

    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const config = await Config.create(req.body);
      return res.status(201).json({ success: true, data: config });

    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const config = await Config.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!config) {
        return res.status(404).json({ success: false });
      }

      return res.status(200).json({ success: true, data: config });

    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await Config.findByIdAndDelete(req.params.id);
      return res.status(200).json({ success: true });

    } catch (error) {
      next(error);
    }
  }
}

export default new ConfigController();