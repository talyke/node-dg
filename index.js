// source for Docs on fs and audio file transcription with Deepgram api https://developers.deepgram.com/sdks-tools/sdks/node-sdk/pre-recorded-transcription/

const { Deepgram } = require('@deepgram/sdk')
const fetch = require('cross-fetch');
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

