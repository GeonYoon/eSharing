const mongoose = require("mongoose");
//const Schema = mongoose.Schema; Doing same thing as below
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    // if you assign an object, you can pass differnet options 
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
