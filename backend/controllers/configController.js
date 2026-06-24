import Config from "../models/Config.js";

class ConfigController {

  // LISTAR TODAS CONFIGS
  async getAllConfigs(req, res, next) {
    try {
      const configs = await Config.find().sort({ chave: 1 });

      return res.status(200).json({
        success: true,
        data: configs
      });
    } catch (error) {
      next(error);
    }
  }

  // BUSCAR POR CHAVE
  async getConfigByKey(req, res, next) {
    try {
      const { chave } = req.params;

      const config = await Config.findOne({ chave });

      if (!config) {
        return res.status(404).json({
          success: false,
          message: "Configuração não encontrada"
        });
      }

      return res.status(200).json({
        success: true,
        data: config
      });
    } catch (error) {
      next(error);
    }
  }

  // CRIAR CONFIG
  async createConfig(req, res, next) {
    try {
      const { chave, valor, descricao } = req.body;

      const exists = await Config.findOne({ chave });

      if (exists) {
        return res.status(400).json({
          success: false,
          message: "Configuração já existe"
        });
      }

      const config = await Config.create({
        chave,
        valor,
        descricao
      });

      return res.status(201).json({
        success: true,
        data: config
      });
    } catch (error) {
      next(error);
    }
  }

  // ATUALIZAR CONFIG
  async updateConfig(req, res, next) {
    try {
      const { id } = req.params;

      const config = await Config.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!config) {
        return res.status(404).json({
          success: false,
          message: "Configuração não encontrada"
        });
      }

      return res.status(200).json({
        success: true,
        data: config
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETAR CONFIG
  async deleteConfig(req, res, next) {
    try {
      const { id } = req.params;

      const config = await Config.findByIdAndDelete(id);

      if (!config) {
        return res.status(404).json({
          success: false,
          message: "Configuração não encontrada"
        });
      }

      return res.status(200).json({
        success: true,
        message: "Configuração removida com sucesso"
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ConfigController();