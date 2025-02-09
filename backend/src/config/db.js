const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Cambia esto por tus credenciales
  host: 'localhost',
  database: 'postgres', // Usa una base de datos que siempre exista, como 'postgres'
  password: '1956', // Reemplaza con tu contraseña de PostgreSQL
  port: 5432,
});
async function createDatabase() {
  const client = await pool.connect();
  try {
    await client.query('CREATE DATABASE galeria_arte');
    console.log('Base de datos "galeria_arte" creada con éxito!');
  } catch (err) {
    console.log('La base de datos "galeria_arte" ya existe');
  } finally {
    client.release();
  }
}

async function initializeTables() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        rol VARCHAR(50) DEFAULT 'cliente',
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        telefono VARCHAR(20),
        direccion TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('Tablas inicializadas');
  } catch (err) {
    console.error('Error al crear las tablas:', err);
  } finally {
    client.release();
  }
}

module.exports = { pool, createDatabase, initializeTables };

