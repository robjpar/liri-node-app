# L.I.R.I. &mdash; Language Interpretation and Recognition Interface

This is a simple implementation of the Language Interpretation and Recognition Interface (L.I.R.I.) as a command line Node.js application. It allows users to search for info about concerts, songs, and movies.

## Features

- Serching for info about:
  - Concerts
  - Songs
  - Movies

## Technologies

- AJAX
- Node.js

## API's

- [Bandsintown API](http://www.artists.bandsintown.com/bandsintown-api)
- [OMDb API](http://www.omdbapi.com/)
- [Spotify API](https://developer.spotify.com/)

## Installation

Requires `Node.js`. Clone the repository to a local folder and install the dependencies with `npm install`. In order to use the Spotify API, a text file named `.env` needs to be created in the root folder of the application with the following contents, completed with the actual API keys obtained at [Spotify API](https://developer.spotify.com/).

```text
# Spotify API keys

SPOTIFY_ID=<your-spotify-id>
SPOTIFY_SECRET=<your-spotify-secret>
```

## Usage

### 1. Usage

Quick command line help with examples

`node liri.js`

![usage](images/01-usage.png 'Usage')

### 2. Concert This

Searching for future events related to given artist or band.

`node liri.js concert-this <artist/band name here>`,  
e.g. `node liri.js concert-this Cher`

![concert-this](images/02-concert-this.png 'Concert This')

### 3. Spotify This Song

Searching for info related to given song.

`node liri.js spotify-this-song <song name here>`,  
e.g. `node liri.js spotify-this-song I Want it That Way`

![spotify-this-song](images/03-spotify-this-song.png 'Spotify This Song')

### 4. Movie This

Searching for info related to given movie.

`node liri.js movie-this <movie name here>`,  
e.g. `node liri.js movie-this Batman`

![movie-this](images/04-movie-this.png 'Movie This')

### 5. Do What It Says

Reads the command and search term from the `random.txt` file located in the root folder of the applications and executes it. The format of `random.txt` contents is as follows

```text
<command>,<search term>
```

e.g.

```text
spotify-this-song,"I Want it That Way"
```

`node liri.js do-what-it-says`

![do-what-it-says](images/05-do-what-it-says.png 'Do What It Says')

Note: The results of searches are also saved (appended) to the `log.txt` file in the app folder.

## License

[MIT](https://choosealicense.com/licenses/mit/)
