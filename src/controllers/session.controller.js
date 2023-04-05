const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const UserLoginDTO = require("../dtos/user-login.dto");

const userLogin = async (req = request, res = response) => {
  try {
    const userLoginDTO = new UserLoginDTO(req.body);
    const user = await User.findOne({
      where: { username: userLoginDTO.username },
    });

    if (!user) {
      return res.status(404).json({
        message: "username/password incorreta",
      });
    }

    if (!userLoginDTO.passwordIsValid(user.password)) {
      return res.status(404).json({
        message: "username/password incorreta",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Usuário logado com sucesso",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao login de usuário",
      error,
    });
  }
};

module.exports = {
  userLogin,
};
