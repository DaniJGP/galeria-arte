const express = require('express');
const artRoutes = require('./routes/artRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/artworks', artRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
