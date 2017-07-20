'use strict';

var Alexa = require('alexa-sdk');
var audioData = require('./audioAssets');
var constants = require('./constants');

var stateHandlers = {
    startModeIntentHandlers : Alexa.CreateStateHandler(constants.states.START_MODE, {
        /*
         *  All Intent Handlers for state : START_MODE
         */
        'LaunchRequest' : function () {
            //  Change state to START_MODE
            this.handler.state = constants.states.START_MODE;

            var message = 'Welcome to Radio Sai. What stream would you like to play?  You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
            var reprompt = 'You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';

            console.log("Executing Start Mode intent handler for LaunchRequest");
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'PlayBhajanStream' : function () {
            this.attributes['stream'] = 'BhajanStream';
            controller.play.call(this);
        },
        'PlayDiscourseStream' : function () {
            this.attributes['stream'] = 'DiscourseStream';
            controller.play.call(this);
        },
        'PlayAsiaStream' : function () {
            this.attributes['stream'] = 'AsiaStream';
            controller.play.call(this);
        },
        'PlayAmeriStream' : function () {
            this.attributes['stream'] = 'AmeriStream';
            controller.play.call(this);
        },
        'PlayAfriStream' : function () {
            this.attributes['stream'] = 'AfriStream';
            controller.play.call(this);
        },
        'PlayTeluguStream' : function () {
            this.attributes['stream'] = 'TeluguStream';
            controller.play.call(this);
        },
        'AMAZON.HelpIntent' : function () {
          var message = 'Welcome to Radio Sai. What stream would you like to play?  You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
          var reprompt = 'You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
          console.log("Executing start mode intent handler for help request");
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'AMAZON.StopIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'AMAZON.CancelIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Sorry, I could not understand. Please say the stream you would like to play. You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    }),
    playModeIntentHandlers : Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
        /*
         *  All Intent Handlers for state : PLAY_MODE
         */
        'LaunchRequest' : function () {
          this.handler.state = constants.states.PLAY_MODE;

          var message = 'Welcome to Radio Sai. What stream would you like to play?  You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
          var reprompt = 'You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
          console.log("Executing play mode intent handler for launch request");
          this.response.speak(message).listen(reprompt);
          this.emit(':responseReady');
        },
        'PlayBhajanStream' : function () {
            this.attributes['stream'] = 'BhajanStream';
            controller.play.call(this)
        },
        'PlayDiscourseStream' : function () {
              this.attributes['stream'] = 'DiscourseStream';
              controller.play.call(this);
        },
        'PlayAsiaStream' : function () {
              this.attributes['stream'] = 'AsiaStream';
              controller.play.call(this);
        },
        'PlayAmeriStream' : function () {
              this.attributes['stream'] = 'AmeriStream';
              controller.play.call(this);
        },
        'PlayAfriStream' : function () {
              this.attributes['stream'] = 'AfriStream';
              controller.play.call(this);
        },
        'PlayTeluguStream' : function () {
              this.attributes['stream'] = 'TeluguStream';
              controller.play.call(this);
        },
        'AMAZON.PauseIntent' : function () { controller.stop.call(this) },
        'AMAZON.StopIntent' : function () { controller.stop.call(this) },
        'AMAZON.CancelIntent' : function () { controller.stop.call(this) },
        'AMAZON.ResumeIntent' : function () { controller.play.call(this) },
        'AMAZON.HelpIntent' : function () {
            // This will called while audio is playing and a user says "ask <invocation_name> for help"
            var message = 'You are listening to Radio Sai. You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream.  ' +
                'At any time, you can say Pause to pause the audio and Resume to resume.';
            console.log("Executing play mode intent handler for help request");
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Sorry, I could not understand. Please say the stream you would like to play. You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    }),
    resumeDecisionModeIntentHandlers : Alexa.CreateStateHandler(constants.states.RESUME_DECISION_MODE, {
        /*
         *  All Intent Handlers for state : RESUME_DECISION_MODE
         */
        'LaunchRequest' : function () {
            var message = 'You were listening to ' + this.attributes['stream'] + '.  Would you like to resume?';
            var reprompt = 'You can say yes to resume or no to play anotehr stream';
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'AMAZON.YesIntent' : function () { controller.play.call(this) },
        'AMAZON.NoIntent' : function () { controller.reset.call(this) },
        'AMAZON.HelpIntent' : function () {
            var message = 'You were listening to ' + this.attributes['stream'] + '.  Would you like to resume?';
            var reprompt = 'You can say yes to resume or no to play anotehr stream';
            console.log("Executing resume mode intent handler for launch request");
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'AMAZON.StopIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'AMAZON.CancelIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
          var message = 'Sorry, I could not understand. Please say the stream you would like to play. You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
          this.response.speak(message).listen(message);
          this.emit(':responseReady');
        }
    })
};

module.exports = stateHandlers;

var controller = function () {
    return {
        play: function () {
            var streamName = this.attributes['stream'];
            var playBehavior = 'REPLACE_ALL';
            var streamUrl = audioData.get(streamName);

            // Since play behavior is REPLACE_ALL, enqueuedstreamName attribute need to be set to null.
            this.attributes['enqueuedstreamName'] = null;

            if (canThrowCard.call(this)) {
                var cardTitle = 'Playing ' + streamName;
                var cardContent = 'Playing ' + streamName;
                this.response.cardRenderer(cardTitle, cardContent, null);
            }

            this.response.audioPlayerPlay(playBehavior, streamUrl, streamName, null, 0);
            this.emit(':responseReady');
        },
        stop: function () {
            /*
             *  Issuing AudioPlayer.Stop directive to stop the audio.
             *  Attributes already stored when AudioPlayer.Stopped request received.
             */
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        },
        reset: function () {
            // Reset to top of the playlist.
            controller.play.call(this);
        }
    }
}();

function canThrowCard() {
    /*
     * To determine when can a card should be inserted in the response.
     * In response to a PlaybackController Request (remote control events) we cannot issue a card,
     * Thus adding restriction of request type being "IntentRequest".
     */
    if (this.event.request.type === 'IntentRequest') {
        return true;
    } else {
        return false;
    }
}
