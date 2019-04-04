# liri-node-app

## Description

 A simple implementation of the Language Interpretation and Recognition Interface (LIRI) as a command line Node.js application. Uses the following API's to search for info about concerts, songs, and movies: [Bandsintown API](http://www.artists.bandsintown.com/bandsintown-api), [OMDb API](http://www.omdbapi.com/), and [Spotify API](https://developer.spotify.com/).

## How to use

Requires `Node.js`. Clone the repository to a local folder and install the dependencies with `npm install`. In order to use the Spotify API, a file named `.env` needs to be created in the current folder with the following contents, completed with the appropriate API keys.

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```

Available functionality with examples:

1. Usage - a quick command line help with examples.  
   `node liri.js`

    ![usage](images/01-usage.png "Usage")

2. "Concert This" - searching for future events related to given artist or band.  
   `node liri.js concert-this <artist/band name here>`  
   e.g. `node liri.js concert-this Cher`

    ![concert-this](images/02-concert-this.png "Concert This")

3. "Spotify This Song" - searching for info related to given song.  
   `node liri.js spotify-this-song <song name here>`  
   e.g. `node liri.js spotify-this-song I Want it That Way`

    ![spotify-this-song](images/03-spotify-this-song.png "Spotify This Song")

4. "Movie This" - searching for info related to given movie.  
   `node liri.js movie-this <movie name here>`  
   e.g. `node liri.js movie-this Batman`

    ![movie-this](images/04-movie-this.png "Movie This")

5. "Do What It Says" - reads the command from the `random.txt` files and executes it.  
   `node liri.js do-what-it-says`

    ![do-what-it-says](images/05-do-what-it-says.png "Do What It Says")

The results are also saved to the `log.txt` file in the current folder.
