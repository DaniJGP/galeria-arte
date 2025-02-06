const pool = require('../config/db');

const getAllArt = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM artworks');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getArtById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM artworks WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Obra de arte no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createArt = async (req, res) => {
  const { title, artist, description, price } = req.body;
  try {
    await pool.query('INSERT INTO artworks (title, artist, description, price) VALUES ($1, $2, $3, $4)', [title, artist, description, price]);
    res.status(201).json({ message: 'Obra de arte creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateArt = async (req, res) => {
  const { id } = req.params;
  const { title, artist, description, price } = req.body;
  try {
    await pool.query('UPDATE artworks SET title = $1, artist = $2, description = $3, price = $4 WHERE id = $5', [title, artist, description, price, id]);
    res.json({ message: 'Obra de arte actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteArt = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM artworks WHERE id = $1', [id]);
    res.json({ message: 'Obra de arte eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllArt, getArtById, createArt, updateArt, deleteArt };
