const { SALT } = process.env;
const getSalt = () => {
  return parseInt(SALT);
};

module.exports = {
  getSalt,
};
