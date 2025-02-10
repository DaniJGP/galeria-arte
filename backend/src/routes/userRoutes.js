const express = require('express');
const router = express.Router();
const { authenticateToken, requireAdmin } = require('../middlewares/authMiddleware');
const { registerUser, loginUser, getUser, updateUser, deleteUserById, getAllUsers, getUserById, updateUserById } = require('../controllers/userController');

// Rutas para registrar e iniciar sesión
router.post('/register', registerUser);  
router.post('/login', loginUser);    

// Rutas del propio usuario
router.get('/me', authenticateToken, getUser);    
router.put('/me', authenticateToken, updateUser);  

// Rutas de admin
router.get('/', authenticateToken, requireAdmin, getAllUsers);  
router.get('/:id', authenticateToken, requireAdmin, getUserById);
router.put('/:id', authenticateToken, requireAdmin, updateUserById);
router.delete('/:id', authenticateToken, requireAdmin, deleteUserById);

module.exports = router;
