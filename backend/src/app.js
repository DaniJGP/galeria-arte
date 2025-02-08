const express = require('express');
const artRouter = require('./routes/artRoutes');
const userRounter = require('./routes/userRoutes');

const app = express();

// Middlewares
app.use(express.json());


// Rutas
app.use('/products', artRouter);
app.use('/users', userRounter);

module.exports = app;
