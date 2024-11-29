// app.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./authroutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/auth', authRoutes);  // Use the routes for OAuth login

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
