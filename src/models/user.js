const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config.db");
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required: true
 *        - name
 *        - username
 *        - password
 *      properties:
 *        name:
 *          type: string
 *          default: Nikola Tesla
 *        email:
 *          type: string
 *          default: tesla@tesla.com
 *        username:
 *          type: string
 *          default: tesla
 *        password:
 *          type: string
 *          default: 12345678
 */
const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  { timestamps: false }
);

module.exports = {
  User,
};
