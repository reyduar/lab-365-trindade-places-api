const { request, response } = require("express");
const { User } = require("../models/user");
const UserCreateDTO = require("../dtos/user-create.dto");
const UserUpdateDTO = require("../dtos/user-update.dto");

const getUsers = async (_, res = response) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["id", "DESC"]],
    });
    if (users) {
      res.status(200).json({
        users,
      });
    } else {
      res.status(404).json({ mensaje: "Usuários não encontrados" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao procurar usuários",
      error,
    });
  }
};

const getUser = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id,
      },
    });
    if (user) {
      res.status(200).json({
        message: "Usuário encontrado com sucesso",
        user,
      });
    } else {
      res.status(404).json({ mensaje: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar usuário",
      error,
    });
  }
};

const createUser = async (req = request, res = response) => {
  try {
    const userCreateDTO = new UserCreateDTO(req.body);
    const userCreated = await User.create({ ...userCreateDTO });
    const { password, ...rest } = userCreated.dataValues;
    res.status(201).json({ message: "Usuário criado com sucesso", user: rest });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar o novo usuário",
      error,
    });
  }
};

const updateUser = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      const userUpdateDTO = new UserUpdateDTO(req.body);
      const userUpdated = await User.update(
        { ...userUpdateDTO },
        { where: { id } }
      );
      res.status(200).json({
        message: "Usuário atualizado com sucesso",
        user: userUpdated,
      });
    } else {
      res.status(404).json({ mensaje: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar usuário",
      error,
    });
  }
};

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });
    if (user) {
      res.status(200).json({
        message: "Usuário deletado com sucesso",
      });
    } else {
      res.status(404).json({ mensaje: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar usuário",
      error,
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
