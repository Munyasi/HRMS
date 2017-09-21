'use strict';
let search = require('../patient/search');
let getAllDetails = require('../patient/getAllDetails');

module.exports = function(Patient) {
    Patient.search = search;
    Patient.remoteMethod('search', {
        accepts: [
            {arg: 'id', type: 'number', required: true},
        ],
        returns: {arg: 'data', type: 'Object'},
        http: {path: '/:id/search'}
    });

    Patient.getAllDetails = getAllDetails;
    Patient.remoteMethod('getAllDetails', {
        accepts: [
            {arg: 'params', type: 'object',http: { source: 'body' }, required: true}
        ],
        returns: {arg: 'data', type: 'Object'},
        http: {path: '/getAllDetails',verb: 'post'}
    });
};
