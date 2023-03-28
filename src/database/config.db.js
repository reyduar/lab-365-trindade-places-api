require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = {
  sequelize,
};

// Sincroniza la base de datos
sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado..");
});
