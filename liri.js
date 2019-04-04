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

function concertThis() {
  outputText +=
    `Command: ${command}, term: ${term}\n` +
    '---------\n';

  var queryUrl = `https://rest.bandsintown.com/artists/${term}/events?app_id=codingbootcamp`;

  axios.get(queryUrl)
    .then(function(response) {

      response.data.forEach(function(event) {
        outputText +=
          `Venue: ${event.venue.name}\n` +
          `Location: ${event.venue.city}, ${event.venue.region}, ${event.venue.country}\n` +
          `Date: ${moment(event.datetime).format('MM/DD/YYYY')}\n` +
          '---------\n';

      });

      console.log(outputText);

      saveToFile();
    })
    .catch(function(error) {
      console.log(`!!! Could not get data, error: ${error}`);
    });
}

function spotifyThisSong() {
  var spotify = new Spotify(keys.spotify);

  spotify
    .search({
      type: 'track',
      query: term,
      limit: 20 // default value
    })
    .then(function(response) {
      outputText +=
        `Command: ${command}, term: ${term}\n` +
        '---------\n';

      response.tracks.items.forEach(function(track) {

        outputText += 'Artist(s): ';

        track.artists.forEach(function(artist) {
          outputText += `${artist.name}, `;
        });

        outputText += '\n';

        outputText +=
          `Song's name: ${track.name}\n` +
          `Preview link: ${track.preview_url === null ? 'Not available' : track.preview_url}\n` +
          `Album: ${track.album.name}\n` +
          '---------\n';
      });

      console.log(outputText);

      saveToFile();
    })
    .catch(function(error) {
      console.log(`!!! Could not get data, error: ${error}`);
    });

}

function saveToFile() {
  fs.appendFile(LOG_FILENAME, outputText, function(error) {

    if (error) {
      console.log(`!!! Could not save to ${LOG_FILENAME}, error: ${error}`);

    } else {
      console.log(`<<< Results also appended to ${LOG_FILENAME} in the current directory`);
    }
  });
}
