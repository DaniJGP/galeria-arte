const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

// Asegurarse de proteger las rutas con JWT
router.get('/artworks', authenticate, (req, res) => {
  res.json({ message: 'Lista de obras de arte' });
});

module.exports = router;
