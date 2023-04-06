const yup = require("yup");

const schema = yup.object().shape({
  name: yup.string(),
  phone: yup.string(),
  openingHours: yup.string(),
  description: yup.string(),
  latitude: yup.number("Latitude e numérico").max(11),
  longitude: yup.number("Longitude e numérico").max(11),
});

const validPlaceJsonUpdate = (req, res, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  validPlaceJsonUpdate,
};
