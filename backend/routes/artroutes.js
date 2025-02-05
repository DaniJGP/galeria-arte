const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authmiddleware');
const { getAllArt, getArtById, createArt, updateArt, deleteArt } = require('../controllers/artcontroller');

// Rutas protegidas para gestionar obras de arte
router.get('/', getAllArt);
router.get('/:id', getArtById);
router.post('/', authenticateToken, createArt);
router.put('/:id', authenticateToken, updateArt);
router.delete('/:id', authenticateToken, deleteArt);

module.exports = router;