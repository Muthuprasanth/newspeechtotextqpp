var express = require('express');
var router = express.Router();

var fs = require("fs");
var request = require('request');
var url = require('url');
var request = require('request-promise').defaults({ encoding: null });
var toWav = require('audiobuffer-to-wav')
//var audiobuffer = require('audio-buffer')
const AudioContext = require('web-audio-api').AudioContext;
const audioContext = new AudioContext;
const { BingSpeechClient, VoiceRecognitionResponse } = require('bingspeech-api-client');

function getfile(url,token)
{
  return request({
    url: url,
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/octet-stream'
    }
  });
}

router.get('/speechtotext', function(req, res, next) {
  res.send("thanks wor working");
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
