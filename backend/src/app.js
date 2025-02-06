const express = require('express');
const authRouter = require('./routes/authRoutes');
const artRouter = require('./routes/authRoutes');
const userRounter = require('./routes/userRoutes');


const app = express();

// Middlewares


// Rutas
app.use('/auth', authRouter);
app.use('/products', artRouter);
app.use('/users', userRounter);

module.exports = app;
