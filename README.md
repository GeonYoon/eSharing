# Eamily

This is a web application that can create mutiple surveys and sends them through emails. Plus, this app can automatically shows the survey results from people who recieve the emails. Additionally app-users can login with Google account and buy the credits that can be used to create surveys

## How To Use

### 1. Check-out production version 

Go to [Webpage](https://whispering-falls-98221.herokuapp.com)  
Create your account with google account and start to use the application 

### 2. Install in your local machine 

install node modules in both root directory and client folder 
```
npm install  
cd client  
npm install  
cd..
```
create dev.js 
```
cd config
touch dev.js
```
customize your own dev.js
```
module.exports = {
    googleClientID: 'GOOGLE_API_KEY',
    googleClientSecret: 'GOOGLE_API_SECRET_KEY',
    mongoURI: 'MLAB_API_KEY',
    cookieKey: 'CREATE_RANDOM_KEYS',
    stripePublishableKey: 'STRIPE_API_KEY',
    stripeSecretKey: 'STRIPE_API_SECRET_KEY',
    sendGridKey: 'SENDGRID_API_KEY',
    redirectDomain: 'http:localhost:8081'
};
```
Create random webhook link and modify sendgrid_webhook.sh
```
function localtunnel {
  lt -s YOUR_RANDOM_LINK --port 8080
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
```
Run the application by entering following line

```
npm run dev
```

## Built With

* [React](https://reactjs.org/) - Used to build client side
* [Redux](http://redux.js.org/docs/basics/UsageWithReact.html) - Predictable state container for JavaScript apps
* [Node.js](https://nodejs.org/en/) - Used to build client side 
* [Express.js](http://expressjs.com/) - Framework for Node.js
* [MongoDB](https://www.mongodb.com/) - Used to build database 
* [mongoose.js](http://mongoosejs.com/) - MongoDB ODM for Node.js
* [Heroku](https://www.heroku.com) - Used to deploy this application 
* [mlab](https://mlab.com/) -  Cloud MongoDB service
* [Sendgrid](https://sendgrid.com/) - Cloud-based email delivery platform
* [Passport.js](http://www.passportjs.org/) - Passport is authentication middleware for Node.js
* [Stripe](https://stripe.com/docs/stripe-js/reference) - Used to handle payment system



## Authors

* **Geon Yoon ** - *Initial work* - [GeonYoon](https://github.com/GeonYoon)
