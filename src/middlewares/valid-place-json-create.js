const yup = require("yup");

const schema = yup.object().shape({
  name: yup.string().required("O campo nome é obrigatório"),
  phone: yup.string(),
  openingHours: yup.string().required("O campo horários é obrigatório"),
  description: yup.string(),
  latitude: yup
    .number("Latitude e numérico")
    .required("O campo latitude é obrigatório"),
  longitude: yup
    .number("Longitude e numérico")
    .required("O campo longitude é obrigatório"),
});

const validPlaceJsonCreate = (req, res, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  validPlaceJsonCreate,
};
