const { pool } = require('../config/db');

exports.create = async ({
  email,
  password,
  nombre,
  apellido,
  telefono = null,
  direccion = null,
}) => {
  const result = await pool.query(
    `INSERT INTO users (
        email, password, nombre, apellido, telefono, direccion
      ) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [email, password, nombre, apellido, telefono, direccion]
  );
  return result.rows[0];
};

exports.getUserById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    console.error('Error obteniendo el usuario:', error);
    throw error;
  } finally {
    client.release();
  }
};

exports.getByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);
  return result.rows[0];
};
