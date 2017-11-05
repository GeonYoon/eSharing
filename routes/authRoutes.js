const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile','email']
        })
    );

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        //arrow function wichi wll be where the reqeust is sent to after this passport 
        // authenticate middleware is executed
        (req, res) => {
            res.redirect('/surveys')
        }
    );
    
    app.get('/api/logout', (req,res) => {
        // it tkaes the cookie that contains our users ID and it kills the ID that's in there 
        req.logout();
        //req.user was destroyed by passport.js
        res.redirect('/');
    });
    
    app.get('/api/current_user', (req,res) => {
        res.send(req.user);    
    });
};

