const { Pool } = require('pg');
const path = require('node:path');
const { executeSQL } = require('./executeSQL');
const { createDatabase } = require('./createDatabase');
require('dotenv').config();

const pool = new Pool();

const initializeDB = async () => {
  const schemaPath = path.resolve(__dirname, '../db/schema.sql');
  const seedPath = path.resolve(__dirname, '../db/seed.sql');
  await createDatabase(process.env.PGDATABASE);
  await executeSQL(pool, schemaPath);
  await executeSQL(pool, seedPath);
};

initializeDB();

module.exports = pool;
