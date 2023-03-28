const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config.db");
const { swaggerDocs } = require("../utils/swagger");
const testRoute = require("../routes/test.route");
const usuarioRoute = require("../routes/usuario.route");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3333;
    this.testRoutePath = "/api/test";
    this.usuarioRoutePath = "/api/usuarios";

    // Middlewares
    this.middlewares();
    // App Routes
    this.routes();
    // Database connection
    this.mongodbConnection();
  }

  async mongodbConnection() {
    await dbConnection();
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
    this.app.use(`${this.testRoutePath}`, testRoute);
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
