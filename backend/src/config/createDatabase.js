const { Pool } = require('pg');

const createDatabase = async (DBName) => {
  // Se conecta a la base de datos 'postgres' para crear 'galeria_arte'
  try {
    const postgres = new Pool({ database: 'postgres' });
    await postgres.query('DROP DATABASE IF EXISTS galeria_arte');
    await postgres.query('CREATE DATABASE galeria_arte');
    console.log('Base de datos creada!');
  } catch (err) {
    console.error(err);
  } finally {
    await postgres.end();
  }
};

module.exports = { createDatabase };
