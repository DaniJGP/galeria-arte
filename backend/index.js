const express = require('express');
const cors = require('cors');
const { json } = require('express');
require('dotenv').config();

const authRoutes = require('./routes/authroutes');
const artRoutes = require('./routes/artroutes');
const userRoutes = require('./routes/userroutes');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/art', artRoutes);
app.use('/api/users', userRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API REST funcionando correctamente');
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
