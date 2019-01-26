const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    
    app.get('/api/surveys', requireLogin ,async(req,res) => {
        const surveys = await Survey.find({ _user: req.user.id })
            .select({ recipients : false});
        
        res.send(surveys);
    });
    
    app.get('/api/surveys/:surveyId/:choice', (req,res) => {
        res.send('Thanks for voting!');
    });
    
    app.post('/api/surveys/webhooks', (req,res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
        
         _.chain((req.body))
        .map(({ email, url}) => {
           // extract the path from the URL
           const match = p.test(new URL(url).pathname);
           if (match) {
               return { email, surveyId: match.surveyId, choice: match.choice};
           }
        })
        .compact()
        .uniqBy('email', 'surveyId')
        .each(({ surveyId, email, choice}) => {
            Survey.updateOne(
            {
                _id: surveyId, 
                // go through all those different element and sub docuemtns and find one element 
                recipients: {
                    $elemMatch: { email: email, responded: false }
                }
            }, 
            {
                $inc: { [choice] : 1 },
                // $ means the index that you found from recipients above
                $set: {'recipients.$.responded': true},
                lastResponded: new Date()
                }
            ).exec();
        })
        .value();
        
        
        res.send({});
    });
    
    app.post('/api/surveys', requireLogin ,requireCredits, async (req,res)=> {
        const {title, subject, body, recipients} = req.body;
        
        const survey = new Survey({
            // title : title
            title,
            subject,
            body, 
            // Split it into an array and then return an object for every e-mail
            // address in there with a property of email and the value of the actual 
            // email address
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now(), 
        });
        
        
        //Great place to send an email!
        const mailer = new Mailer(survey, surveyTemplate(survey));
        
        try {
            // before we start to do any saving or of any surveys or anything like that down here 
            // make sure that the async code inside of Mailer.send is completed as well 
            await mailer.send();
            await survey.save();
            req.user.credits-= 1;
            const user = await req.user.save();      
        
            res.send(user);
        } catch (err) {
            // 422 menas unprocessable entity 
            // which means somethiing is wrong with the data you sent us
            res.status(422).send(err);
        }
    });
    
    app.delete('/api/surveys/delete/:id', async (req, res) => {
        console.log("here");
        await Survey.deleteOne({ _id: req.params.id });
        const survey = await Survey.find({ _user: req.user.id }).sort({dateSent: -1}).select({
          recipients: false
        });
        res.send(survey);
      });
      
};