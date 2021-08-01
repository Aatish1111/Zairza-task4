const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth : {
        api_key: 'use your api key', 
        domain: 'use your own domain'
    }
};

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'aatishkumarmoharana@gmail.com',
        // to: 'aatishkumarmoharana@gmail.com',
        subject: subject, 
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err){
            cb(err, null);
        } else{
            cb(null, data);
        }
    })
}

module.exports = sendMail;

