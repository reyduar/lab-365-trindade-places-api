const { response } = require("express");
const eUsuarioLider = (req, res = response, next) => {
  const { cargo, idade } = req.body;
  if (cargo.toLowerCase() !== "lider") {
    return res.status(406).json({
      message:
        "Só poderá salvar se o cargo do usuário for igual a string 'Líder'",
    });
  }
  if (idade < 21) {
    return res.status(406).json({
      message: "Usuário não possui idade suficiente",
    });
  }
  next();
};

module.exports = {
  eUsuarioLider,
};
