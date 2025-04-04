const express = require('express');
require('dotenv').config();
require('./config/db'); // Connexion à MongoDB

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); // Middleware pour lire les JSON

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${process.env.PORT}`);
}); 