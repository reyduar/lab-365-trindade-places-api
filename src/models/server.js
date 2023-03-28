const express = require("express");
const cors = require("cors");
const { sequelize } = require("../database/config.db");
const { swaggerDocs } = require("../utils/swagger");
const usuarioRoute = require("../routes/usuario.route");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3333;
    this.usuarioRoutePath = "/api/usuarios";

    // Middlewares
    this.middlewares();
    // App Routes
    this.routes();
    // Database connection
    this.dbConnection();
  }

  async dbConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection success");
    } catch (error) {
      throw new Error("Error connection");
    }
  }

  middlewares() {
    // JSON Body Parser
    this.app.use(express.json());

    // CORS Errors
    this.app.use(cors());

    // Public directory
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(`${this.usuarioRoutePath}`, usuarioRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
      // Swagger docs
      swaggerDocs(this.app, this.port);
    });
  }
}

module.exports = Server;
