const bcrypt = require("bcrypt");

class UserLoginDTO {
  constructor({ username, password }) {
    this.username = username;
    this.password = password;
  }

  passwordIsValid(password) {
    return bcrypt.compareSync(this.password, password);
  }
}

module.exports = UserLoginDTO;
