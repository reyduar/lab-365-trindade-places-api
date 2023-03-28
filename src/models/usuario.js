const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config.db");
/**
 * @openapi
 * components:
 *  schemas:
 *    CriarUsuarioInput:
 *      type: object
 *      required: true
 *        - nome
 *        - senha
 *      properties:
 *        nome:
 *          type: string
 *          default: Nikola Tesla
 *        email:
 *          type: string
 *          default: tesla@tesla.com
 *        senha:
 *          type: string
 *          default: 12345678
 */
const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  { timestamps: false }
);

module.exports = {
  Usuario,
};
