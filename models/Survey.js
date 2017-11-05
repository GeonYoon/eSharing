const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
   title: String,
   body: String,
   subject: String,
   recipients: [RecipientSchema],
   yes: {type: Number, default: 0},
   no: {type: Number, default: 0},
   // a reference to a very particular user or to another instance of user 
   _user: {type: Schema.Types.ObjectId, ref: 'User'},
   dateSent: Date,
   lastResponded: Date
});

mongoose.model('surveys',surveySchema);