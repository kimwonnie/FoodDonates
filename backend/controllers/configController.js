import Config from "../models/Config.js";

class ConfigController {

  async getAll(req, res, next) {

    try {

      const configs =
        await Config.find()
          .sort({ chave: 1 });

      return res.status(200).json({
        success: true,
        data: configs
      });

    } catch (error) {

      next(error);

    }

  }

  async getByKey(req, res, next) {

    try {

      const { chave } = req.params;

      const config =
        await Config.findOne({ chave });

      if (!config) {

        return res.status(404).json({
          success: false,
          message:
            "Configuração não encontrada"
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

  async create(req, res, next) {

    try {

      const {
        chave,
        valor,
        descricao
      } = req.body;

      const exists =
        await Config.findOne({
          chave
        });

      if (exists) {

        return res.status(400).json({
          success: false,
          message:
            "Configuração já existe"
        });

      }

      const config =
        await Config.create({
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

  async update(req, res, next) {

    try {

      const { id } = req.params;

      const config =
        await Config.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
            runValidators: true
          }
        );

      if (!config) {

        return res.status(404).json({
          success: false,
          message:
            "Configuração não encontrada"
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

  async delete(req, res, next) {

    try {

      const { id } = req.params;

      const config =
        await Config.findByIdAndDelete(
          id
        );

      if (!config) {

        return res.status(404).json({
          success: false,
          message:
            "Configuração não encontrada"
        });

      }

      return res.status(200).json({
        success: true,
        message:
          "Configuração removida com sucesso"
      });

    } catch (error) {

      next(error);

    }

  }

}

export default new ConfigController();