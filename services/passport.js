const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const config = require('../config/keys');
// setting the strategy for the google authentication
passport.use(new googleStrategy({
    clientID:config.googleClientID,
    clientSecret:config.googleSecretID,
    callbackURL:'/auth/google/callback'
},(accessToken,refreshToken,profile,done) =>{
    console.log('accesstoken',accessToken);
    console.log('refresh',refreshToken);
    console.log('profile',profile);
})
);