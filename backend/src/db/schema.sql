CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  rol VARCHAR(50) DEFAULT 'cliente',
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  telefono VARCHAR(20),
  direccion TEXT,
  created_at TIMESTAMPZ DEFAULT NOW(),
  updated_at TIMESTAMPZ DEFAULT NOW()
);

CREATE TABLE obras (
  id SERIAL PRIMARY KEY,
  estado VARCHAR(20) NOT NULL DEFAULT 'disponible',
  nombre VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  img_url VARCHAR(255),
  descripcion TEXT,
  categoria VARCHAR(50),
  tecnica VARCHAR(255),
  alto SMALLINT,
  ancho SMALLINT,
  created_at TIMESTAMPZ DEFAULT NOW(),
  updated_at TIMESTAMPZ DEFAULT NOW()
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  estado VARCHAR,
  precio_total INTEGER,
  direccion TEXT,
  created_at TIMESTAMPZ DEFAULT NOW(),
  updated_at TIMESTAMPZ DEFAULT NOW(),
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE orders_obra (
  id SERIAL PRIMARY KEY,
  order_id INTEGER,
  obra_id INTEGER,
  CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders (id),
  CONSTRAINT fk_obra FOREIGN KEY (obra_id) REFERENCES obras (id)
);
