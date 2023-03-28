const { request, response } = require("express");
const { Usuario } = require("../models/usuario");

const getUsuarios = async (req = request, res = response) => {
  try {
    const usuarios = await Usuario.findAll({
      // where: {
      //   age: { [Op.gte]: 18 } // exemplo pra fazer where
      // },
      order: [["id", "DESC"]],
    });
    if (usuarios) {
      res.status(200).json({
        usuarios,
      });
    } else {
      res.status(404).json({ mensaje: "Usuários não encontrados" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ao procurar usuários",
      error,
    });
  }
};

const getUsuario = async (req = Request, res = Response) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.status(201).json({
        message: "Usuário encontrado com sucesso",
        usuario,
      });
    } else {
      res.status(404).json({ mensaje: "usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ao atualizar usuário",
      error,
    });
  }
};

const createUsuario = async (req = Request, res = Response) => {
  const { nome, email, senha } = req.body;
  try {
    const usuarioCreated = await Usuario.create({ nome, email, senha });
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", usuario: usuarioCreated });
  } catch (error) {
    res.status(500).json({
      message: "Error ao criar usuario",
      error,
    });
  }
};

const updateUsuario = async (req = Request, res = Response) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    const usuarioUpdated = await Usuario.findByPk(id);
    if (usuarioUpdated) {
      await Usuario.update({ nome, email, senha }, { where: { id } });
      res.status(201).json({
        message: "Usuário atualizado com sucesso",
        usuario: usuarioUpdated,
      });
    } else {
      res.status(404).json({ mensaje: "usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ao atualizar usuário",
      error,
    });
  }
};

const deleteUsuario = async (req = Request, res = Response) => {
  const { id } = req.params;
  try {
    const usuarioDeleted = await Usuario.destroy({ where: { id } });
    if (usuarioDeleted) {
      res.status(201).json({
        message: "Usuário deletado com sucesso",
      });
    } else {
      res.status(404).json({ mensaje: "usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ao deletar usuário",
      error,
    });
  }
};

module.exports = {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
