# eSharing

eSharing automatically collects the latest scientific articles related to computer science and shows to the users.  Then they can easily share the news through email and then collect feedbacks. This application supports simple sign-in / log-in via Google account. 

## Notable features
- Bring live data by using web  scraping
- Able to share the article with multiple people through the mail 
- Collect feedback from the people who receive the emails
- Support Google log-in / sign-in
- Payment system is available 

## How To Use

### 1. Check-out production version 

Go to [Webpage](https://whispering-falls-98221.herokuapp.com)  
Create your account with google account and start to use the application 

### 2. Install in your local machine 

Install dependencies in client side
```
cd client  
npm install  
cd..
```

Install dependencies in server side
```
npm install
```

Create dev.js to save keys for local development
```
cd config
touch dev.js
```

Create accounts in google devleoper console, Mlab, Stripe, and Sendgrid. 

Customize your own dev.js and copy each keys on he file. 
```
module.exports = {
    googleClientID: 'GOOGLE_API_KEY',
    googleClientSecret: 'GOOGLE_API_SECRET_KEY',
    mongoURI: 'MLAB_API_KEY',
    cookieKey: 'CREATE_RANDOM_KEYS',
    stripePublishableKey: 'STRIPE_API_KEY',
    stripeSecretKey: 'STRIPE_API_SECRET_KEY',
    sendGridKey: 'SENDGRID_API_KEY',
    redirectDomain: 'http://localhost:8081'
};

```
Customize sendgrid_webhook.sh
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
* [cheerio](https://cheerio.js.org/) - Used to do web scrapping
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js

## Authors

* **Geon Yoon ** - *Initial work* - [GeonYoon](https://github.com/GeonYoon)
