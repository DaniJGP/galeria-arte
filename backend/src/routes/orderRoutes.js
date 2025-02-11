const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { createUserOrder } = require('../controllers/orderController');
const router = express.Router();

router.use(authenticateToken);

router.post('/', createUserOrder);

module.exports = router;
