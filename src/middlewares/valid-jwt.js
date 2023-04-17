const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const validJWT = async (req = request, res = response, next) => {
  // Example of auth header - Authorization: Bearer eyJhb..
  // Expect the Bearer scheme in the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Usuário não autorizado",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res
          .status(403)
          .json({ message: "Token de autorização expirado" });
      } else if (error.name === "JsonWebTokenError") {
        return response.status(403).json({ message: "Token inválido" });
      } else {
        return res.status(403).json({
          message: "Authorization erro",
        });
      }
    } else {
      // Check if user has not deleted
      const user = await User.findByPk(decoded.id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não existe" });
      }
      req.body.userId = decoded.id;
      return next();
    }
  });
};

module.exports = {
  validJWT,
};
