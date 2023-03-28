const { Schema, model } = require("mongoose");
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
 *        idade:
 *          type: number
 *          default: 52
 *        cargo:
 *          type: string
 *          default: Lider
 *        senha:
 *          type: string
 *          default: 12345678
 */
const UsuarioSchema = Schema({
  nome: {
    type: String,
  },
  idade: {
    type: Number,
  },
  cargo: {
    type: String,
  },
  senha: {
    type: String,
  },
});

module.exports = {
  Usuario: model("Usuario", UsuarioSchema),
};
