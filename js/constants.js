"use strict";

module.exports = Object.freeze({

    // App-ID. TODO: set to your own Skill App ID from the developer portal.
    appId : 'RadioSai',

    //  DynamoDB Table name
    dynamoDBTableName : 'LongFormAudioSample',

    /*
     *  						:
     *  START_MODE : Welcome state when the audio list has not begun.
     *  PLAY_MODE :  When a playlist is being played. Does not imply only active play.
     *               It remains in the state as long as the playlist is not finished.
     *  RESUME_DECISION_MODE : When a user invokes the skill in PLAY_MODE with a LaunchRequest,
     *                         the skill provides an option to resume from last position, or to start over the playlist.
     */
    states : {
        START_MODE : '',
        PLAY_MODE : '_PLAY_MODE',
        RESUME_DECISION_MODE : '_RESUME_DECISION_MODE'
    },

    enData : {
        translation: {
            SKILL_NAME: 'radio sai global harmony',
            WELCOME_MESSAGE: 'Sairam. Welcome to Radio Saayees streaming audio service. What stream would you like to play?  or cancel to quit',
            REPROMPT: 'You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream - or cancel to quit.',
            HELP_MESSAGE: 'Welcome to Radio Sai. What stream would you like to play?  You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream. You can say ask radiosai global harmony to stop in order to quit',
            ERROR_MESSAGE: 'Sorry, I could not understand. Please say the name of the stream you would like to play. You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream - or say cancel to quit.',
            STOP_MESSAGE: 'Good bye',
            BHAJAN_STREAM_MESSAGE: 'Playing Bhajan Stream.',
            ASIA_STREAM_MESSAGE: 'Playing Asia Stream.',
            AFRI_STREAM_MESSAGE: 'Playing Afri Stream.',
            AMERI_STREAM_MESSAGE: 'Playing Ameri Stream.',
            DISCOURSE_STREAM_MESSAGE: 'Playing Discourse Stream.',
            TELUGU_STREAM_MESSAGE: 'Playing Telugu Stream.',
            HELP_ON_PLAY_MESSAGE: 'You are listening to Radio Sai. You can say one of Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream or Telugu Stream.  ' +
                'At any time, you can say Pause to pause the audio and Resume to resume.',
            RESUME_MESSAGE1: 'You were listening to ',
            RESUME_MESSAGE2: 'Would you like to resume?',
            RESUME_REPROMPT: 'You can say yes to resume or no to play another stream.',
            CARD_TITLE_STRING: 'Playing '
        }
    },

    hiData : {
        translation: {
            SKILL_NAME: 'प्रशांति निलयम से  रेडियो साईं',
            WELCOME_MESSAGE: 'साई राम. रेडियो साईं में आप का स्वागत है. आप कौनसा stream सुनना चाहेंगे? या फिर बाहर आने के लिए cancel.',
            REPROMPT: 'आप इन में से एक कह सकते हैं -  Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream या Telugu Stream - या फिर बाहर आने के लिए cancel.',
            HELP_MESSAGE: 'रेडियो साईं में आप का स्वागत है. आप कौनसा stream सुनना चाहेंगे?  आप इन में से एक कह सकते हैं - Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream या Telugu Stream. या फिर बाहर आने के लिए, रुको कह सकते हैं.',
            ERROR_MESSAGE: 'सॉरी, मैं वो समज नहीं पायी. आप इन में से एक कह सकते हैं -  Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream या Telugu Stream - या फिर बाहर आने के लिए cancel.',
            STOP_MESSAGE: 'अलविदा',
            BHAJAN_STREAM_MESSAGE: 'आप सुनने जा रहे हैं - Bhajan Stream.',
            ASIA_STREAM_MESSAGE: 'आप सुनने जा रहे हैं - Asia Stream.',
            AFRI_STREAM_MESSAGE: 'आप सुनने जा रहे हैं - Afri Stream.',
            AMERI_STREAM_MESSAGE: 'आप सुनने जा रहे हैं - Ameri Stream.',
            DISCOURSE_STREAM_MESSAGE: 'आप सुनने जा रहे हैं - Discourse Stream.',
            TELUGU_STREAM_MESSAGE: 'आप सुनने जा रहे हैं - Telugu Stream.',
            HELP_ON_PLAY_MESSAGE: 'आप सुन रहे हैं प्रशांति निलयम से  रेडियो साईं. आप इन में से एक कह सकते हैं -  Bhajan Stream, Discourse Stream, Ameri Stream, Asia Stream, Afri Stream या Telugu Stream.  ' +
                'आप जब चाहे Pause कहकर आवाज़ बंद कर सकते हैं  और Resume कहकर फिर से सुन सकते हैं .',
            RESUME_MESSAGE1: 'आप सुन रहे थे - ',
            RESUME_MESSAGE2: 'क्या आप फिर से शुरू करना चाहेंगे?',
            RESUME_REPROMPT: 'अगर आप हाँ कहते हैं तो फिर से सुन सकते हैं, नहीं तो न कहकर कोई और stream सुन सकते हैं.',
            CARD_TITLE_STRING: 'आप सुनने जा रहे हैं -  '
        }
    },

    languageStrings : {
       'hi-IN': this.hiData,
       'en-US': this.enData
    }
});
