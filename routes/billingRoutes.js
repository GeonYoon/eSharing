const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
    app.post('/api/stripe', requireLogin,  async (req,res) => {
        
        const charge = await stripe.charges.create({
            amount : 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        
        req.user.credits += 5;
        // so just to make sure that we are always using the most
        // possible or the most up to date as possible model at any given time
        // we make use of the user model that got returend from the 
        // save request. 
        const user = await req.user.save();
        
        res.send(user);
    });
};