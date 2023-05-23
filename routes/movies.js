const moviesRouter = require('express').Router();

const { getMoviesSavedByUser, createMovie } = require('../controllers/movies');

moviesRouter.get('/', getMoviesSavedByUser);
moviesRouter.post('/', createMovie);

module.exports = moviesRouter;
