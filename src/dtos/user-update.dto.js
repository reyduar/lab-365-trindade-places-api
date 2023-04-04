class UserUpdateDTO {
  constructor({ name, email, username, password }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}

module.exports = UserUpdateDTO;
