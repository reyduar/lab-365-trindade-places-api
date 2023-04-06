const { request, response } = require("express");
const yup = require("yup");

const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("O e-mail é inválido"),
  username: yup.string(),
  password: yup.string().min(8),
});

const validUserJsonUpdate = (req = request, res = response, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  validUserJsonUpdate,
};
