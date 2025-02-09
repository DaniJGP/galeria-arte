const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};

const createUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
  const { rows } = await pool.query(query, [email, hashedPassword]);
  return rows[0];
};

module.exports = { getUserByEmail, createUser };

