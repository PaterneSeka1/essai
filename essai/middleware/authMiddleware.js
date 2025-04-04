const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header('Authorization').split(" ")[1]; // Récupère le token du header
        if (!token) return res.status(401).json({ message: "Accès interdit, token manquant" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Stocke les infos du user dans `req.user`
        next();
    } catch (err) {
        res.status(401).json({ message: "Token invalide" });
    }
};
