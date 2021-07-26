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
const getSearchMovieData = require('./modules/SearchForMovie')


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

//localhost:3001/searchForMovie?search=iron
app.get('/searchForMovie', getSearchMovieData)

// http://localhost:3001/
app.get('/', testHandler);

//localhost:3001/favoriteMovies?userEmail=email
app.get('/favoriteMovies', getDataFromFavorites)

function testHandler(req, res) {
  res.send('working')
}






const movieSchema = new mongoose.Schema({
  title: String,
  overview: String,
  release_date: String,
  vote_average: String,
  vote_count: String,
  popularity: String,
  movieId: String,
  trailerKey: String,
  poster: String,
})

const userSchema = new mongoose.Schema({
  email: String,
  movies: [movieSchema],
})

const userModel = mongoose.model('user', userSchema)

function seeding() {

  const jana = new userModel(
    {
      email: 'janaosama1300@gmail.com', books: [
        {
          title: 'String',
          overview: 'String',
          release_date: 'String',
          vote_average: 'String',
          vote_count: 'String',
          popularity: 'String',
          movieId: 'String',
          trailerKey: 'String',
          poster: 'String',
        },
      ]
    })
  jana.save()
}


// seeding();

// const movieModal = mongoose.model('movie', movieSchema)

app.post('/favoriteMovies', addMovieToFavorites)

function addMovieToFavorites(req, res) {

  // console.log(req.body);

  let { email,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    popularity,
    movieId,
    trailerKey,
    poster } = req.body

  console.log(email);

  userModel.find({ email: email }, (error, items) => {

    if (error) {
      res.send(error);

    }

    else {
      items[0].movies.push({
        title: title,
        overview: overview,
        release_date: release_date,
        vote_average: vote_average,
        vote_count: vote_count,
        popularity: popularity,
        movieId: movieId,
        trailerKey: trailerKey,
        poster: poster,
      })

      console.log(items[0].movies);

      items[0].save();
    }

    res.send(items[0].movies)
  })
}


function getDataFromFavorites(req, res) {

  let email = req.query.userEmail;

  userModel.find({ email: email }, (error, items) => {



    if (error) {
      res.send(error);

    }

    else {

      res.send(items[0].movies)
    }

  }
  )
}


app.delete('/deleteMovie/:movieIdx', deleteMovie)

function deleteMovie(req, res) {

  let index = Number(req.params.movieIdx);
  let userEmail = req.query.userEmail;

  console.log(req.query);

  userModel.find({ email: userEmail }, (error, userData) => {

    if (error) { 
      res.send('cant find user') 
    }

    else {

      let newUserData = userData[0].movies.filter((item, idx) => {
        if (idx !== index) { return item }
      })
    
      userData[0].movies = newUserData
      userData[0].save();
      res.send(userData[0].movies)
    }

  })
}


app.listen(PORT, () => console.log(`listening on ${PORT}`));
