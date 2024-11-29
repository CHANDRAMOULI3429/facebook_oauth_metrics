// /controllers/authController.js
const axios = require('axios');
const config = require('./config');

// Redirect user to Facebook login page
const facebookLogin = (req, res) => {
    const facebookLoginUrl = `https://www.facebook.com/v13.0/dialog/oauth?client_id=${config.facebookAppId}&redirect_uri=${config.facebookRedirectUri}&scope=email,public_profile,friends,photos,posts`;
    res.redirect(facebookLoginUrl);
};

// /controllers/authController.js
const fetchUserMetrics = async (accessToken) => {
    try {
        const userData = await axios.get('https://graph.facebook.com/me', {
            params: {
                fields: 'id,name,email,friends,photos,posts',
                access_token: accessToken,
            },
        });

        return userData.data;
    } catch (error) {
        console.error('Error fetching user metrics:', error.message);
        throw new Error('Error fetching user metrics');
    }
};

// After Facebook callback
const facebookCallback = async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('Error: No code provided');
    }

    try {
        // Get the access token
        const response = await axios.get('https://graph.facebook.com/v13.0/oauth/access_token', {
            params: {
                client_id: config.facebookAppId,
                client_secret: config.facebookAppSecret,
                redirect_uri: config.facebookRedirectUri,
                code: code,
            },
        });
        
       
        

        const accessToken = response.data.access_token;

        if (accessToken) {
            // Store the access token (session, database, etc.)
            req.session.accessToken = accessToken;  // Optional: Store it in the session
            
            // Fetch metrics using the access token
            const userMetrics = await fetchUserMetrics(accessToken);
            
            // Respond with the user metrics data (or store in DB)
            res.json(userMetrics);
        } else {
            res.status(400).send('Error: Unable to get access token');
        }
    } catch (error) {
        console.error('OAuth Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    facebookLogin,
    facebookCallback
};
