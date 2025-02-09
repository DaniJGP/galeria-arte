const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const artworkRoutes = require('./routes/artRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);  
app.use('/api/artworks', artworkRoutes);  

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API está funcionando correctamente' });
});

module.exports = app;
