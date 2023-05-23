const Movie = require('../models/movie');
const { OK_CODE, CREATED_CODE } = require('../ustils/codeStatus');
const { handleError } = require('../ustils/handleError');

const getMoviesSavedByUser = (req, res, next) => {
  const { _id } = req.user;
  Movie.find({ owner: _id })
    .populate('owner')
    .then((movies) => {
      res.status(OK_CODE).send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: req.user._id,
    movieId,
    nameRU,
    nameEN,
  }).then((newMovie) => {
    console.log('сюда');
    Movie.findById(newMovie._id)
      .populate('owner')
      .then((createdMovie) => res.status(CREATED_CODE).send(createdMovie))
      .catch((err) => handleError(err, next));
  }).catch((err) => handleError(err, next));
};

module.exports = {
  getMoviesSavedByUser,
  createMovie,
};
