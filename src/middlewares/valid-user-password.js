const { response } = require("express");
const validUserPassword = (req, res = response, next) => {
  const { password } = req.body;
  if (password.length < 8) {
    return res.status(400).json({
      message: "Password deve ter no mínimo 8 caracteres.",
    });
  }
  next();
};

module.exports = {
  validUserPassword,
};
