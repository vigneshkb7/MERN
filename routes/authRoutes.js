
const passport = require('passport');
module.exports=(app)=>{
// this route is called on login
app.get('/auth/google',
    passport.authenticate('google',{
        scope:['profile','email'] //scope defines the what info you what to access for.
    })
);
//This route is called when the user is validated and redirected to this route
app.get('/auth/google/callback',passport.authenticate('google'));

}
