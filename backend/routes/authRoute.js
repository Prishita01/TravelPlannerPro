// routes/authRoute.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/api/register', authController.register);

// Log in an existing user
router.post('/api/login', authController.login);

module.exports = router;
