DROP TABLE IF EXISTS orders;

CREATE TABLE users (
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

CREATE TABLE obras (
  id SERIAL PRIMARY KEY,
  estado VARCHAR(20) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  img_url VARCHAR(255),
  descripcion TEXT,
  categoria VARCHAR(50),
  tecnica VARCHAR(255),
  alto SMALLINT,
  ancho SMALLINT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  estado VARCHAR,
  precio_total INTEGER,
  direccion TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
