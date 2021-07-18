'use strict';

require('dotenv').config();

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MovieLand', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(cors());

app.use(express.json())

const { myMovieModel } = require('./modules/homePageMovies')


const PORT = 3001


//localhost:3001/movie?userEmail=ibrahem.sarayrah@gmail.com
app.get('/movie', getMovieData)

function getMovieData(req, res) {

    let userEmail = req.query.userEmail
  
    myMovieModel.find({ email: userEmail }, function (error, userData) {
      if (error) {
        res.send(error)
      } else {
        res.send(userData[0].movie)
      }
    })
  }

// http://localhost:3001/
app.get('/', testHandler);

function testHandler(req, res) {
  res.send('working')
}




app.listen(PORT, () => console.log(`listening on ${PORT}`));