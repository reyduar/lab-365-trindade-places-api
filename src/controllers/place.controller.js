const { request, response } = require("express");
const { Place } = require("../models/place");
const PlaceUpdateDTO = require("../dtos/place-update.dto");
const PlaceCreateDTO = require("../dtos/place-create.dto");

const getPlaces = async (req = request, res = response) => {
  try {
    const places = await Place.findAll({
      where: { userId: req.body.userId },
      order: [["id", "DESC"]],
    });
    if (places) {
      res.status(200).json({
        places,
      });
    } else {
      res.status(404).json({ mensaje: "Places não encontrados" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao procurar places",
      error,
    });
  }
};

const getPlace = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const place = await Place.findByPk(id);
    if (place) {
      res.status(200).json({
        message: "Place encontrado com sucesso",
        place,
      });
    } else {
      res.status(404).json({ mensaje: "Place não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar place",
      error,
    });
  }
};

const createPlace = async (req = request, res = response) => {
  try {
    const placeCreateDto = new PlaceCreateDTO(req.body);
    await Place.create({ ...placeCreateDto });
    res
      .status(201)
      .json({ message: "Place criado com sucesso", place: placeCreateDto });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar o novo place",
      error,
    });
  }
};

const updatePlace = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const placeUpdated = await Place.findByPk(id);
    if (placeUpdated) {
      const placeDto = new PlaceUpdateDTO(req.body);
      await Place.update({ ...placeDto }, { where: { id } });
      res.status(200).json({
        message: "Place atualizado com sucesso",
        place: placeDto,
      });
    } else {
      res.status(404).json({ mensaje: "Place não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar o place",
      error,
    });
  }
};

const deletePlace = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const placeDeleted = await Place.destroy({ where: { id } });
    if (placeDeleted) {
      res.status(200).json({
        message: "Place deletado com sucesso",
      });
    } else {
      res.status(404).json({ mensaje: "Place não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar Place",
      error,
    });
  }
};

module.exports = {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
};
