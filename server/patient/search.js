let app = require('../server')
let Promise = require('bluebird')
let _ = require('lodash')
let async = require('async')
let emailApi = require('emailjs')
let randomize = require('randomatic');

function search(id, cb) {
    let Patient = app.models.Patient;
    Patient.findById(id)
        .then(function (resPatient) {
            if(resPatient){
                let rand = randomize('A0', 8);
                resPatient.authorization_code = rand;
                resPatient.save();
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



module.exports = search;