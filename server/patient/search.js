let app = require('../server')
let Promise = require('bluebird')
let _ = require('lodash')
let async = require('async')
let emailApi = require('emailjs')
let randomize = require('randomatic');

let querystring = require('querystring');
let https       = require('https');
// Your login credentials
let username = 'ehrs';
let apikey   = '5d451915c2aa02aede4b3a2f59c7501d072f979c412e6e9f5e2819ba664cb3fb';

function search(id, cb) {
    let Patient = app.models.Patient;
    Patient.findById(id)
        .then(function (resPatient) {
            if(resPatient){
                let rand = randomize('A0', 8);
                resPatient.authorization_code = rand;
                resPatient.save();
                phone = resPatient.phone_number;
                sendMessage("+254"+phone.substr(phone.length - 9),rand);
                sendMail(resPatient.email,rand);
                resPatient.authorization_code=null;
                cb(null,resPatient)
            }else{
                cb(null,null);
            }
        })
        .catch(function (err) {
            return cb(err);
        });


}

function sendMail(email,rand) {
    var server 	= emailApi.server.connect({
        user:    "test@siroccolifestyle.co.ke",
        password:"@4tkenya",
        host:    "siroccolifestyle.co.ke",
        tls:    {ciphers: "SSLv3"},
        timeout: 60000,
        port:   587
    });
    server.send({
        text:    "Your new authorization key is "+rand,
        from:    "test-admin@siroccolifestyle.co.ke",
        to:      email,
        subject: "Authorization Key - EHRS"
    }, function(err, message) {
        console.log(err||message);
    });
}

function sendMessage(phone,rand) {
    var to      = phone;
    var message = "Your Authorization code is: "+rand;

    var post_data = querystring.stringify({
        'username' : username,
        'to'       : to,
        'message'  : message
    });

    console.log(post_data);

    var post_options = {
        host   : 'api.africastalking.com',
        path   : '/version1/messaging',
        method : 'POST',

        rejectUnauthorized : false,
        requestCert        : true,
        agent              : false,

        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length,
            'Accept': 'application/json',
            'apikey': apikey
        }
    };

    var post_req = https.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            var jsObject   = JSON.parse(chunk);
            var recipients = jsObject.SMSMessageData.Recipients;
            if ( recipients.length > 0 ) {
                for (var i = 0; i < recipients.length; ++i ) {
                    var logStr  = 'number=' + recipients[i].number;
                    logStr     += ';cost='   + recipients[i].cost;
                    logStr     += ';status=' + recipients[i].status; // status is either "Success" or "error message"
                    console.log(logStr);
                }
            } else {
                console.log('Error while sending: ' + jsObject.SMSMessageData.Message);
            }
        });
    });

    // Add post parameters to the http request
    post_req.write(post_data);

    post_req.end();
}



module.exports = search;