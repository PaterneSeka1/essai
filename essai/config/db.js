const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB connecté');
}).catch(err => console.log('❌ Erreur de connexion MongoDB:', err));

module.exports = mongoose;