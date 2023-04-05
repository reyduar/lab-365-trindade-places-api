const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const validJWT = async (req = request, res = response, next) => {
  // Example of auth header - Authorization: Bearer eyJhb..
  const authHeader = req.headers["authorization"];
  // Expect the Bearer scheme in the Authorization header
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Usuário não autorizado",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    // Check if user has not deleted
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não existe" });
    }

    // Check if the token has expired
    if (decoded.exp <= Date.now() / 1000) {
      return res.status(401).json({ message: "Token de autorização expirado" });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token invalido",
    });
  }
};

module.exports = {
  validJWT,
};
