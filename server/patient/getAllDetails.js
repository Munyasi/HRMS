let app = require('../server')
let Promise = require('bluebird')
let _ = require('lodash')
let async = require('async')

function getAllDetails(params, cb) {
    let Patient = app.models.Patient;
    let Hospital = app.models.Hospital;
    let Disease = app.models.Disease;
    let Medicine = app.models.Medicine;
    let Insurance = app.models.Insurance;
    Patient.findOne({where:{authorization_code:params.code,id:params.id}})
        .then(function (resPatient) {
            if(resPatient){
                // an example using an object instead of an array
                async.parallel({
                    facilities: function(callback) {
                        var ds = Hospital.dataSource;
                        var sql = "SELECT *,Count(Hospital.name) as frequency FROM Hospital JOIN PatientHospital on PatientHospital.hospital_id=Hospital.id WHERE PatientHospital.patient_id="+params.id+" GROUP BY Hospital.name";
                        ds.connector.query(sql,function (err, hosRes) {
                            if (err) {
                                callback(err);
                            }else {
                                callback(null,hosRes);
                            }
                        });
                    },
                    diagnosis: function(callback) {
                        var ds = Disease.dataSource;
                        var sql = "SELECT *,Count(Disease.name) as frequency FROM Disease JOIN PatientDisease on PatientDisease.disease_id=Disease.id WHERE PatientDisease.patient_id="+params.id+" GROUP BY Disease.name";
                        ds.connector.query(sql,function (err, diaRes) {
                            if (err) {
                                callback(err);
                            }else {
                                callback(null,diaRes);
                            }
                        });
                    },
                    medication: function(callback) {
                        var ds = Medicine.dataSource;
                        var sql = "SELECT *,Count(Medicine.name) as frequency FROM Medicine JOIN PatientMedicine on PatientMedicine.medicine_id=Medicine.id WHERE PatientMedicine.patient_id="+params.id+" GROUP BY Medicine.name";
                        ds.connector.query(sql,function (err, medRes) {
                            if (err) {
                                callback(err);
                            }else {
                                callback(null,medRes);
                            }
                        });
                    },
                    health_insurance: function(callback) {
                        var ds = Insurance.dataSource;
                        var sql = "SELECT * FROM Insurance JOIN PatientInsurance on PatientInsurance.insurance_id=Insurance.id WHERE PatientInsurance.patient_id="+params.id+" GROUP BY Insurance.name";
                        ds.connector.query(sql,function (err, insRes) {
                            if (err) {
                                callback(err);
                            }else {
                                callback(null,insRes);
                            }
                        });
                    },
                    history: function(callback) {
                        var ds = Insurance.dataSource;
                        var sql = "SELECT PatientHospital.diagnosis_code,PatientHospital.createdAt,Hospital.name,(SELECT GROUP_CONCAT(Disease.name SEPARATOR ', ')  FROM `PatientDisease` JOIN Disease ON Disease.id = PatientDisease.disease_id WHERE diagnosis_code=PatientHospital.diagnosis_code) as diagnosis, (SELECT GROUP_CONCAT(Medicine.name SEPARATOR ', ')  FROM `PatientMedicine` JOIN Medicine ON Medicine.id = PatientMedicine.medicine_id WHERE diagnosis_code=PatientHospital.diagnosis_code) as medication FROM PatientHospital JOIN Hospital ON Hospital.id = PatientHospital.hospital_id  WHERE patient_id="+params.id;
                        ds.connector.query(sql,function (err, hisRes) {
                            if (err) {
                                console.log(hisRes);

                                callback(hisRes);
                            }else {
                                callback(null,hisRes);
                            }
                        });
                    },
                    analytics: function(callback) {
                        var ds = Medicine.dataSource;
                        let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
                        let diagnosis_frequency = [];
                        let max_df = 0
                        async.forEachOf(months, function (value, key, callback2) {
                            var sql = "SELECT Count(patient_id) as count FROM `PatientHospital` WHERE MonthName(createdAt)='"+value+"'";
                            ds.connector.query(sql,function (err, countRes) {
                                if (err) {
                                    callback2(err);
                                }else {
                                    max_df = (countRes[0].count>max_df)?countRes[0].count:max_df;
                                    diagnosis_frequency.push(countRes[0].count);
                                    callback2();
                                }
                            });

                        }, function (err) {
                            if (err) {
                                callback(err);
                            }else{
                                callback(null,{months:months,diagnosis_frequency:diagnosis_frequency,max_df:max_df});
                            }
                        });
                    },

                }, function(err, results) {
                    if(!err){
                        resPatient['facilities']= results.facilities;
                        resPatient['diagnosis']= results.diagnosis;
                        resPatient['medication']= results.medication;
                        resPatient['health_insurance']= results.health_insurance;
                        resPatient['history']= results.history;
                        resPatient['analytics']= results.analytics;
                        cb(null,resPatient);
                    }else{
                        cb(err);
                    }
                });

            }else{
                cb(null,null);
            }
        })
        .catch(function (err) {
            return cb(err);
        });

    function get() {

    }
}


module.exports = getAllDetails;