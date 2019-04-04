require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");

var command = process.argv[2];
var term = process.argv.slice(3).join(" ");

const LOG_FILENAME = 'log.txt';
const RANDOM_FILENAME = 'random.txt';

var outputText = '=========\n';

function executeCommand() {
  if (command === 'concert-this') {
    concertThis();

  } else if (command === 'spotify-this-song') {
    if (!keys.spotify.id || !keys.spotify.secret) {
      console.log('!!! Spotify credentials not available');
      process.exit();
    }

    spotifyThisSong();

  } else if (command === 'movie-this') {
    movieThis();

  } else if (command === 'do-what-it-says') {
    doWhatItSays();

  } else {
    if (command) {
      console.log(`!!! Command "${command}" not recognized`);
    }

    console.log(
      'Usage:\n' +
      'node liri.js concert-this <artist/band name here>\n' +
      ' e.g. node liri.js concert-this cher\n' +
      'node liri.js spotify-this-song <song name here>\n' +
      ' e.g. node liri.js spotify-this-song I Want it That Way\n' +
      'node liri.js movie-this <movie name here>\n' +
      ' e.g. node liri.js movie-this batman\n' +
      'node liri.js do-what-it-says'
    );
  }
}

executeCommand();

