const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.login = passport.authenticate('local',{
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureMessage: 'Invalid login',
});

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
        return;
    }
    res.redirect('/login');
};