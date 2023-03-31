const { request, response } = require("express");
const validPlaceIdParam = (req = request, res = response, next) => {
  const id = req.params.id || null;
  if (!id) {
    return res.status(400).json({
      message: "Está faltando dados para concluir a operação",
    });
  }
  next();
};

module.exports = {
  validPlaceIdParam,
};
