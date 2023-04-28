const yup = require("yup");

yup.setLocale({
  mixed: {
    required: "Este campo es obligatorio",
  },
});

const schema = yup.object().shape({
  name: yup.string().required("O campo nome é obrigatório"),
  email: yup
    .string()
    .email("O e-mail é inválido")
    .required("O campo e-mail é obrigatório"),
  username: yup.string().required("O campo username é obrigatório"),
  password: yup.string().required("O campo password é obrigatório").min(8),
});

const validUserJsonCreate = (req, res, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  validUserJsonCreate,
};
