const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { register, login } = require('../controllers/authController');
const router = express.Router();


router.post('/register', register);
router.post('/login', login);

module.exports = router;