const { SALT } = process.env;
function getSalt() {
  return parseInt(SALT);
}

module.exports = {
  getSalt,
};
