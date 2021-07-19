'use strict';

const axios = require('axios');

module.exports = getSearchMovieData;


function getSearchMovieData(req, res) {
  let search=req.query.search

  let url = `https://api.themoviedb.org/3/search/movie?api_key=a4c7218e93f1dee30eff2f6ceb6e3c5e&query=${search}&language=en-US&page=1&include_adult=false`;

    axios
      .get(url)
      .then(movieData => {
        let dataForMovie = movieData.data.results.map(movies => {
          return new Movie(movies);
        });
        res.status(200).send(dataForMovie);

      }).catch(err => {
        res.status(500).send(`Internal Server Error 500 ${err}`);
      });
  }


class Movie {
    constructor(movies) {
      this.title = movies.title;
      this.overview = movies.overview;
      this.vote_average = movies.vote_average;
      this.vote_count = movies.vote_count;
      this.poster_path = movies.poster_path;
      this.popularity = movies.popularity;
      this.release_date = movies.release_date;
      this.id=movies.id
    }
  }