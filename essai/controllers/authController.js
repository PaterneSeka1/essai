const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        console.log('body:  ', req.body);
        const { email, password } = req.body;
        // Vérification de l'existence de l'utilisateur
        const existUser = await  User.findOne({ email });
        console.log('existUser: ', existUser);  
        if (existUser) {
            return res.status(409).json({ message: 'Utilisateur déjà existant' });
        }
        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        
        await user.save();
        res.status(201).json({ message: 'Utilisateur créé' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Identifiants incorrects' });
        }

        // ✅ Génération du token JWT
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ message: 'Connexion réussie', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
