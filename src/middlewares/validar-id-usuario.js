const { Usuario } = require("../models/usuario");

const usuarioIdExiste = async (id) => {
  const existeUsuarioId = await Usuario.findOne({ _id: id });
  if (!existeUsuarioId) {
    throw new Error(`O usuario id: ${id} não existe`);
  }
};

module.exports = {
  usuarioIdExiste,
};
