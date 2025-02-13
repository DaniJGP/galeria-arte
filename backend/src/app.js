const express = require('express');
const artRoutes = require('./routes/artRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require('cors')

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use('/admin', adminRoutes)
app.use('/api/artworks', artRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

module.exports = app;
