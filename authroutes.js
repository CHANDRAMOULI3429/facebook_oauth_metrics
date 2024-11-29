<<<<<<< HEAD
// /routes/authRoutes.js
const express = require('express');
const authController = require('./authcontroller');
const router = express.Router();

// Redirect user to Facebook login page
router.get('/facebook', authController.facebookLogin);

// Facebook OAuth callback route
router.get('/facebook/callback', authController.facebookCallback);

module.exports = router;
=======
// /routes/authRoutes.js
const express = require('express');
const authController = require('./authcontroller');
const router = express.Router();

// Redirect user to Facebook login page
router.get('/facebook', authController.facebookLogin);

// Facebook OAuth callback route
router.get('/facebook/callback', authController.facebookCallback);

module.exports = router;
>>>>>>> 2cc0196f54428704fec2092435bb0aff6ca780bb
