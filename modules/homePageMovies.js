'use strict';

const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Released: String,
    Poster: String,
    Language:String,
    Genre:String,
    Plot:String,
    imdbRating:String,
    Trailer:String,
  })
  
  const homePageSchema = new mongoose.Schema({
    email: String,
    movie: [movieSchema]
  })
  
  const myMovieModel = mongoose.model('movie', homePageSchema)
  
  const seedUserCollection = () => {
    const ibrahem = new myMovieModel({
      email: 'ibrahem.sarayrah@gmail.com',
      movie: [
        {
            Title: "Guardians of the Galaxy Vol. 2",
            Year: "2017",
            Released: "05 May 2017",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Language: "English",
            Genre: "Action, Adventure, Comedy",
            Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
            imdbRating: "7.6",
            Trailer:'https://www.youtube.com/embed/wX0aiMVvnvg'
        },
        {
            Title: "Guardians of the Galaxy Vol. 2",
            Year: "2017",
            Released: "05 May 2017",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Language: "English",
            Genre: "Action, Adventure, Comedy",
            Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
            imdbRating: "7.6",
            Trailer:'https://www.youtube.com/embed/wX0aiMVvnvg'
        },
        {
            Title: "Guardians of the Galaxy Vol. 2",
            Year: "2017",
            Released: "05 May 2017",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Language: "English",
            Genre: "Action, Adventure, Comedy",
            Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
            imdbRating: "7.6",
            Trailer:'https://www.youtube.com/embed/wX0aiMVvnvg'
        },
        {
            Title: "Guardians of the Galaxy Vol. 2",
            Year: "2017",
            Released: "05 May 2017",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Language: "English",
            Genre: "Action, Adventure, Comedy",
            Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
            imdbRating: "7.6",
            Trailer:'https://www.youtube.com/embed/wX0aiMVvnvg'
        },
      ]
    })
    // ibrahem.save();
  }
  
//   seedUserCollection();

  module.exports={myMovieModel}