const { Pool } = require('pg');
const fs = require('node:fs/promises');
const path = require('node:path');
require('dotenv').config();

// Usa las variables de entorno por defecto
// https://node-postgres.com/features/connecting#environment-variables
const pool = new Pool();

const createDatabase = async () => {
  // Se conecta a la base de datos 'postgres' para crear 'galeria_arte'
  const postgres = new Pool({ database: 'postgres' });
  try {
    await postgres.query('DROP DATABASE IF EXISTS galeria_arte');
    await postgres.query('CREATE DATABASE galeria_arte');
    await postgres.end();
    console.log('Base de datos creada!');
  } catch (error) {
    console.log(error);
  }
};

const executeSQL = async (path) => {
  const client = await pool.connect();
  try {
    // Lee archivo SQL
    const sqlFile = await fs.readFile(path, 'utf8');
    // Separa archivo en array de consultas
    const sqlStatements = sqlFile
      .split(';')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    // Ejecuta transaccion SQL
    await client.query('BEGIN');
    for (const statement of sqlStatements) {
      await client.query(statement);
    }
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error con archivo SQL:', err);
  } finally {
    client.release();
  }
};

const schemaPath = path.resolve(__dirname, '../db/schema.sql');

createDatabase().then(() => executeSQL(schemaPath));

module.exports = pool;
