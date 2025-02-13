const pool = require('../config/db');
const Art = require('../models/Art');

const getAllArt = async (req, res) => {
  try {
    const artworkArray = await Art.getAll();
    res.json(artworkArray);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getArtById = async (req, res) => {
  const { id } = req.params;
  try {
    const artwork = await Art.getById(id);
    if (artwork) {
      res.json(artwork);
    } else {
      res.status(404).json({ message: 'Obra de arte no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createArt = async (req, res) => {
  const {
    nombre,
    autor,
    precio,
    img_url,
    descripcion,
    categoria,
    tecnica,
    alto,
    ancho,
  } = req.body;
  try {
    await Art.create({
      nombre,
      autor,
      precio,
      img_url,
      descripcion,
      categoria,
      tecnica,
      alto,
      ancho,
    });
    res.status(201).json({ message: 'Obra de arte creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateArt = async (req, res) => {
  const { id } = req.params;
  const {
    estado,
    nombre,
    autor,
    precio,
    img_url,
    descripcion,
    categoria,
    tecnica,
    alto,
    ancho,
  } = req.body;
  try {
    await Art.updateById({
      estado,
      nombre,
      autor,
      precio,
      img_url,
      descripcion,
      categoria,
      tecnica,
      alto,
      ancho,
      id,
    });
    res.json({ message: 'Obra de arte actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteArt = async (req, res) => {
  const { id } = req.params;
  try {
    await Art.deleteById(id);
    res.json({ message: 'Obra de arte eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllArt, getArtById, createArt, updateArt, deleteArt };
