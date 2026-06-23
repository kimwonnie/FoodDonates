import Log from "../models/Log.js";

class LogService {

  async info(
    origem,
    mensagem,
    metadata = {}
  ) {

    return Log.create({
      nivel: "INFO",
      origem,
      mensagem,
      metadata
    });

  }

  async warning(
    origem,
    mensagem,
    metadata = {}
  ) {

    return Log.create({
      nivel: "WARNING",
      origem,
      mensagem,
      metadata
    });

  }

  async error(
    origem,
    mensagem,
    stack = "",
    metadata = {}
  ) {

    return Log.create({
      nivel: "ERROR",
      origem,
      mensagem,
      stack,
      metadata
    });

  }

  async critical(
    origem,
    mensagem,
    stack = "",
    metadata = {}
  ) {

    return Log.create({
      nivel: "CRITICAL",
      origem,
      mensagem,
      stack,
      metadata
    });

  }

}

export default new LogService();