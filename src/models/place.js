const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config.db");
/**
 * @openapi
 * components:
 *  schemas:
 *    CreatePlaceInput:
 *      type: object
 *      required: true
 *        - name
 *      properties:
 *        name:
 *          type: string
 *          default: Culture and Events Center
 *        phone:
 *          type: string
 *          default: 04837216486
 *        openingHours:
 *          type: string
 *          default: 8AM–6PM
 *        description:
 *          type: string
 *          default: Centro de Cultura e Eventos da UFSC
 *        latitude:
 *          type: decimal
 *          default: -27.601922
 *        longitude:
 *          type: decimal
 *          default: -48.519006
 */
const place = sequelize.define(
  "places",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    openingHours: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = {
  place,
};
