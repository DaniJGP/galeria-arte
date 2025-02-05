const pool = require('../config/db'); 

const createUser = async (username, email, password) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    return result.rows[0]; 
  } catch (error) {
    console.error('Error creando el usuario:', error);
    throw error;
  } finally {
    client.release(); 
  }
};


const getUserById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0]; 
  } catch (error) {
    console.error('Error obteniendo el usuario:', error);
    throw error;
  } finally {
    client.release(); 
  }
};

module.exports = { createUser, getUserById };
