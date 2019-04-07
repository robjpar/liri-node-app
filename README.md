# liri-node-app

## Description

 A simple implementation of the Language Interpretation and Recognition Interface (LIRI) as a command line Node.js application. Uses the following API's to search for info about concerts, songs, and movies: [Bandsintown API](http://www.artists.bandsintown.com/bandsintown-api), [OMDb API](http://www.omdbapi.com/), and [Spotify API](https://developer.spotify.com/).

## How to get started

Requires `Node.js`. Clone the repository to a local folder and install the dependencies with `npm install`. In order to use the Spotify API, a text file named `.env` needs to be created in the app folder with the following contents, completed with the actual API keys obtained at [Spotify API](https://developer.spotify.com/).

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```

## Available functionality with examples

1. Usage &ndash; a quick command line help with examples.

   `node liri.js`

    ![usage](images/01-usage.png "Usage")

2. "Concert This" &ndash; searching for future events related to given artist or band.

   `node liri.js concert-this <artist/band name here>`,  
   e.g. `node liri.js concert-this Cher`

    ![concert-this](images/02-concert-this.png "Concert This")

3. "Spotify This Song" &ndash; searching for info related to given song.

   `node liri.js spotify-this-song <song name here>`,  
   e.g. `node liri.js spotify-this-song I Want it That Way`

    ![spotify-this-song](images/03-spotify-this-song.png "Spotify This Song")

4. "Movie This" &ndash; searching for info related to given movie.

   `node liri.js movie-this <movie name here>`,  
   e.g. `node liri.js movie-this Batman`

    ![movie-this](images/04-movie-this.png "Movie This")

5. "Do What It Says" &ndash; reads the command and search term from the `random.txt` file located in the app folder and executes it. The format of the `random.txt` contents is as follows `<command>,<search term>`, e.g. `spotify-this-song,"I Want it That Way"`.

   `node liri.js do-what-it-says`

    ![do-what-it-says](images/05-do-what-it-says.png "Do What It Says")

The results are also saved (appended) to the `log.txt` file in the app folder.
