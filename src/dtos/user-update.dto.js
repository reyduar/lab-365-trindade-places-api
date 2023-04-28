const bcrypt = require("bcrypt");
const { getSalt } = require("../utils/salt");

class UserUpdateDTO {
  constructor({ name, email, username, password }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password ? this.encryptPassword(password) : null;
  }

  encryptPassword(password) {
    return bcrypt.hashSync(password, getSalt());
  }
}

module.exports = UserUpdateDTO;
