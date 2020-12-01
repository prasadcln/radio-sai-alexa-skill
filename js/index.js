'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');
var stateHandlers = require('./stateHandlers');
var interceptor = require('./LocalizationInterceptor');

exports.handler = function (event, context, callback) {
    console.log(context);
    console.log(event);
    var alexa = Alexa.handler(event, context);
    alexa.appId = constants.appId;
    alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        stateHandlers.startModeIntentHandlers,
        stateHandlers.playModeIntentHandlers,
        stateHandlers.resumeDecisionModeIntentHandlers
    );
    alexa.registerInterceptors(
        interceptor.LocalizationInterceptor
    );
    alexa.execute();
};
