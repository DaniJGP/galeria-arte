const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');

// Función de login
async function login(req, res) {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}

// Función de registro
async function register(req, res) {
  const { email, password, nombre, apellido } = req.body;

  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (email, password, nombre, apellido) VALUES ($1, $2, $3, $4)', [email, hashedPassword, nombre, apellido]);

    return res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (err) {
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}

// Función para obtener todos los usuarios
async function getUsers(req, res) {
  try {
    const result = await pool.query('SELECT * FROM users');
    return res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}

module.exports = { login, register, getUsers };

