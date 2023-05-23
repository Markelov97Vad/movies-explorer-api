const moviesRouter = require('express').Router();

const { getMoviesSavedByUser, createMovie, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/', getMoviesSavedByUser);
moviesRouter.post('/', createMovie);
moviesRouter.delete('/:id', deleteMovie);

module.exports = moviesRouter;
