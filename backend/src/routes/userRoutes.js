const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const { registerUser, loginUser, getUser, updateUser, deleteUser, getAllUsers, getUserById } = require('../controllers/userController');

// Rutas para registrar e iniciar sesión
router.post('/register', registerUser);  
router.post('/login', loginUser);    


router.get('/', authenticateToken, getAllUsers);  
router.get('/:id', authenticateToken, getUserById); 


router.get('/me', authenticateToken, getUser);    
router.put('/me', authenticateToken, updateUser);  
router.delete('/me', authenticateToken, deleteUser); 

module.exports = router;
