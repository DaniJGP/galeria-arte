const express = require('express');
const router = express.Router();
const { authenticateToken, requireAdmin } = require('../middlewares/authMiddleware');
const { getAllArt, getArtById, createArt, updateArt, deleteArt } = require('../controllers/artController');

router.get('/', getAllArt);
router.get('/:id', getArtById);

// Rutas de admin
router.post('/', authenticateToken, requireAdmin, createArt);
router.put('/:id', authenticateToken, requireAdmin, updateArt);
router.delete('/:id', authenticateToken, requireAdmin, deleteArt);

module.exports = router;