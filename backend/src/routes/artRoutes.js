const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const { getAllArt, getArtById, createArt, updateArt, deleteArt } = require('../controllers/artController');

router.get('/', getAllArt);
router.get('/:id', getArtById);
router.post('/', authenticateToken, createArt);
router.put('/:id', authenticateToken, updateArt);
router.delete('/:id', authenticateToken, deleteArt);

module.exports = router;