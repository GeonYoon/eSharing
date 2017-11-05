const express = require("express");
const mongoose = require("mongoose");
const cookieSession= require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require("./config/keys");
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

// middleware starts 

//Now any time a post request or a put request or a patch 
// request or anything else that has a request a body
// comes into our application this middleware right here 
// will parse the body and then assgin it to the req.body  
//property of the incoming request object 
app.use(bodyParser.json());

app.use(
 cookieSession({
     // how long it can survie inside of browser until it is disappeared by itself
     // survive for 30 days
     maxAge: 30 * 24 * 60 *60 *1000,
     keys: [keys.cookieKey]
 })    
);

app.use(passport.initialize());
app.use(passport.session());

// middleware finish 
// route handler starts

// require statements below will turn into the funtions 
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//configuration to make sure that exrpess
// essentially behaves correctly when it is in the production environment. 
if (process.env.NODE_ENV === 'production'){
 // Express will serve up production assets
 // like our main.js file, or main.css file!
 // when a request comes into express, express will first check to see if there is some
 // specific file that mathces up with what that resquest is looking for 
 app.use(express.static('client/build'));
 
 // Express will serve up the index.html file 
 // if it doesn't recognize the route
 // if we have nothing inside of our authroute file and nothing inside of our billing routes
 // file and there's no file inside of our client/build directory that matches
 // up with what this request is looking for, 
 // just give them back the index HMO file
 const path = require('path');
 app.get('*',(req,res) => {
  res.sendFile(path.resolve(__dirname,'client','build','index.html'));
 });
}


const PORT = process.env.PORT || 8080 
app.listen(PORT, function(){
 console.log("server has started");
});