// source for Docs on fs and audio file transcription with Deepgram api https://developers.deepgram.com/sdks-tools/sdks/node-sdk/pre-recorded-transcription/

/*const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(DEEPGRAM_API_KEY)
const fs = require('fs')

const audioSource = {
    stream: fs.createReadStream(''), // wip...
    mimetype: MIMETYPE_OF_FILE,  // add type and file to env once api fetch is set up
},

const response = await deepgram.transcription.preRecorded(audioSource, {
    punctuate: true,
    utterances: true,
})
const srtTranscript = response.toSRT()*/

//DeepGram practice tutorial

const fetch = require('cross-fetch');
const { Deepgram } = require('@deepgram/sdk');

// The API key you created in step 1
const deepgramApiKey = '5f28a32073cc8decbf13f3b095275bf6be9e8258';

// URL for the real-time streaming audio you would like to transcribe
const url = 'http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk';

// Initialize the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

// Create a websocket connection to Deepgram
const deepgramLive = deepgram.transcription.live({
    punctuate: true,
    interim_results: false,
    language: 'en-US'
});

// Listen for the connection to open and send streaming audio from the URL to Deepgram
fetch(url).then(r => r.body).then(res => {
    res.on('readable', () => {
        if (deepgramLive.getReadyState() === 1) {
            deepgramLive.send(res.read());
        }
    });
});

// Listen for the connection to close
deepgramLive.addListener('close', () => {
    console.log('Connection closed.')
});

// Listen for any transcripts received from Deepgram and write them to the console
deepgramLive.addListener('transcriptReceived', (transcription) => {
    console.dir(transcription, { depth: null });
});