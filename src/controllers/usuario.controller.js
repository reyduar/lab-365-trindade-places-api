const { request, response } = require("express");
const { validationResult } = require("express-validator");
const { Usuario } = require("../models/usuario");

const getUsers = async (req = request, res = response) => {
  const { limit = 5, skip = 0 } = req.query;

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(),
    Usuario.find().skip(Number(skip)).limit(Number(limit)),
  ]);
  res.json({
    usuarios,
    total,
  });
};

const newUser = async (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({
      message: "Está faltando dados para concluir a operação",
      errors,
    });
  }
  const { nome, idade, cargo, senha } = req.body;

  const usuario = new Usuario({ nome, idade, cargo, senha });
  await usuario.save();
  res.status(201).json({
    message: "Usuário criado com sucesso",
    usuario,
  });
};

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({
      message: "Está faltando dados para concluir a operação",
      errors,
    });
  }

  await Usuario.findByIdAndDelete(id);
  res.status(200).json({
    message: "Usuário deletado com sucesso",
  });
};
const updateUser = async (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({
      message: "Está faltando dados para concluir a operação",
      errors,
    });
  }
  const { id } = req.params;
  const { ...rest } = req.body;
  await Usuario.findByIdAndUpdate(id, rest);
  res.status(200).json({
    message: `Usuário atualizado com sucesso`,
  });
};

module.exports = {
  getUsers,
  newUser,
  deleteUser,
  updateUser,
};
