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

            var message = ‘WELCOME_MESSAGE’;
            var reprompt = ‘REPROMPT’;

            console.log("Executing Start Mode intent handler for LaunchRequest");
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'PlayBhajanStream' : function () {
			var message = 'BHAJAN_STREAM_MESSAGE';
            this.response.speak(message);
            this.attributes['stream'] = 'BhajanStream';
            controller.play.call(this);
        },
        'PlayDiscourseStream' : function () {
			var message = 'DISCOURSE_STREAM_MESSAGE';
            this.response.speak(message);
            this.attributes['stream'] = 'DiscourseStream';
            controller.play.call(this);
        },
        'PlayAsiaStream' : function () {
			var message = 'ASIA_STREAM_MESSAGE';
            this.response.speak(message);
            this.attributes['stream'] = 'AsiaStream';
            controller.play.call(this);
        },
        'PlayAmeriStream' : function () {
			var message = 'AMERI_STREAM_MESSAGE';
            this.response.speak(message);
            this.attributes['stream'] = 'AmeriStream';
            controller.play.call(this);
        },
        'PlayAfriStream' : function () {
			var message = 'AFRI_STREAM_MESSAGE';
            this.response.speak(message);
            this.attributes['stream'] = 'AfriStream';
            controller.play.call(this);
        },
        'PlayTeluguStream' : function () {
			var message = 'TELUGU_STREAM_MESSAGE';
            this.response.speak(message);
            this.attributes['stream'] = 'TeluguStream';
            controller.play.call(this);
        },

        'AMAZON.PauseIntent' : function () { controller.stop.call(this) },
        'AMAZON.StopIntent' : function () { controller.stop.call(this); var message = 'STOP_MESSAGE'; this.response.speak(message); this.emit(':responseReady'); },
        'AMAZON.CancelIntent' : function () { controller.stop.call(this); var message = 'STOP_MESSAGE'; this.response.speak(message); this.emit(':responseReady'); },
        'AMAZON.ResumeIntent' : function () { controller.play.call(this) },

        'AMAZON.HelpIntent' : function () {
          var message = 'HELP_MESSAGE';
          var reprompt = ‘REPROMPT’;
          console.log("Executing start mode intent handler for help request");
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'ERROR_MESSAGE';
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

          var message = 'HELP_MESSAGE';
          var reprompt = 'You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream';
          console.log("Executing play mode intent handler for launch request");
          this.response.speak(message).listen(reprompt);
          this.emit(':responseReady');
        },
        'PlayBhajanStream' : function () {
			var message = 'BHAJAN_STREAM_MESSAGE';
            this.response.speak(message);
            this.attributes['stream'] = 'BhajanStream';
            controller.play.call(this)
        },
        'PlayDiscourseStream' : function () {
			var message = 'DISCOURSE_STREAM_MESSAGE';
            this.response.speak(message);
              this.attributes['stream'] = 'DiscourseStream';
              controller.play.call(this);
        },
        'PlayAsiaStream' : function () {
			var message = 'ASIA_STREAM_MESSAGE';
            this.response.speak(message);
              this.attributes['stream'] = 'AsiaStream';
              controller.play.call(this);
        },
        'PlayAmeriStream' : function () {
			var message = '';
            this.response.speak(message);
              this.attributes['stream'] = 'AmeriStream';
              controller.play.call(this);
        },
        'PlayAfriStream' : function () {
			var message = 'AFRI_STREAM_MESSAGE';
            this.response.speak(message);
              this.attributes['stream'] = 'AfriStream';
              controller.play.call(this);
        },
        'PlayTeluguStream' : function () {
			var message = 'TELUGU_STREAM_MESSAGE';
            this.response.speak(message);
              this.attributes['stream'] = 'TeluguStream';
              controller.play.call(this);
        },

        'AMAZON.PauseIntent' : function () { controller.stop.call(this) },
        'AMAZON.StopIntent' : function () { controller.stop.call(this); var message = 'STOP_MESSAGE'; this.response.speak(message); this.emit(':responseReady'); },
        'AMAZON.CancelIntent' : function () { controller.stop.call(this); var message = 'STOP_MESSAGE'; this.response.speak(message); this.emit(':responseReady'); },
        'AMAZON.ResumeIntent' : function () { controller.play.call(this) },

        'AMAZON.HelpIntent' : function () {
            // This will called while audio is playing and a user says "ask <invocation_name> for help"
            var message = 'HELP_ON_PLAY_MESSAGE';
            console.log("Executing play mode intent handler for help request");
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'ERROR_MESSAGE';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    }),
    resumeDecisionModeIntentHandlers : Alexa.CreateStateHandler(constants.states.RESUME_DECISION_MODE, {
        /*
         *  All Intent Handlers for state : RESUME_DECISION_MODE
         */
        'LaunchRequest' : function () {
            var message = 'RESUME_MESSAGE1' + this.attributes['stream'] + 'RESUME_MESSAGE2';
            var reprompt = 'RESUME_REPROMPT';
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'AMAZON.YesIntent' : function () { controller.play.call(this) },
        'AMAZON.NoIntent' : function () { controller.reset.call(this) },
        'AMAZON.PauseIntent' : function () { controller.stop.call(this) },
        'AMAZON.StopIntent' : function () { controller.stop.call(this); var message = 'STOP_MESSAGE'; this.response.speak(message); this.emit(':responseReady'); },
        'AMAZON.CancelIntent' : function () { controller.stop.call(this); var message = 'STOP_MESSAGE'; this.response.speak(message); this.emit(':responseReady'); },
        'AMAZON.ResumeIntent' : function () { controller.play.call(this) },

        'AMAZON.HelpIntent' : function () {
            var message = 'RESUME_MESSAGE1' + this.attributes['stream'] + 'RESUME_MESSAGE2';
            var reprompt = 'RESUME_REPROMPT';
            console.log("Executing resume mode intent handler for launch request");
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
          var message = 'ERROR_MESSAGE';
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
                var cardTitle = 'CARD_TITLE_STRING' + streamName;
                var cardContent = 'CARD_TITLE_STRING' + streamName;
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
