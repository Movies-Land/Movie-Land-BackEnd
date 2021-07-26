'use strict';

const axios = require('axios');

module.exports = getMovieTrailerData;


function getMovieTrailerData(req, res) {

  let movieId = req.query.movieId

  let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=3364da0f5f06ed4e038dcad748f160ca&language=en-US`;

  axios
    .get(url)
    .then(movieData => {
      res.status(200).send(movieData.data.results[0].key);

    }).catch(err => {
      res.status(500).send(`Internal Server Error 500 ${err}`);
    });
}
