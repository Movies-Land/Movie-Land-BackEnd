'use strict';

require('dotenv').config();

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MovieLand', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(cors());

app.use(express.json())


const getPopularMovieData = require('./modules/popularMovie')
const getTopRatedMovieData = require('./modules/topRatedMovie')
const getNowPlayingMovieData = require('./modules/nowPlayingMovie')
const getUpcomingMovieData = require('./modules/upcomingMovie')
const getMovieTrailerData = require('./modules/movieTrailer')

const PORT = 3001


//localhost:3001/popularMovie
app.get('/popularMovie', getPopularMovieData)

//localhost:3001/topRatedMovie
app.get('/topRatedMovie', getTopRatedMovieData)

//localhost:3001/nowPlayingMovie
app.get('/nowPlayingMovie', getNowPlayingMovieData)

//localhost:3001/upcomingMovie
app.get('/upcomingMovie', getUpcomingMovieData)

//localhost:3001/movieTrailer?movieId=497698
app.get('/movieTrailer', getMovieTrailerData)

// http://localhost:3001/
app.get('/', testHandler);

function testHandler(req, res) {
  res.send('working')
}




app.listen(PORT, () => console.log(`listening on ${PORT}`));