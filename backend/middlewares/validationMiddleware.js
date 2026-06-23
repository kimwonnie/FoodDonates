const validationMiddleware = (
  requiredFields = []
) => {

  return (
    req,
    res,
    next
  ) => {

    const missingFields =
      requiredFields.filter(
        field =>
          !req.body[field]
      );

    if (
      missingFields.length > 0
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Campos obrigatórios ausentes",
        fields: missingFields
      });

    }

    next();

  };

};

export default validationMiddleware;