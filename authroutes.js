// /routes/authRoutes.js
const express = require('express');
const authController = require('./authcontroller');
const router = express.Router();

// Redirect user to Facebook login page
router.get('/facebook', authController.facebookLogin);

// Facebook OAuth callback route
router.get('/facebook/callback', authController.facebookCallback);

module.exports = router;
