// /config/config.js
require('dotenv').config();

const config = {
    facebookAppId: process.env.FACEBOOK_APP_ID,
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    facebookRedirectUri: process.env.FACEBOOK_REDIRECT_URI,
};

module.exports = config;
