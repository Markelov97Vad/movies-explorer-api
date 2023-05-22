const mongoose = require('mongoose');
const { reqexUrl } = require('../ustils/config');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return reqexUrl.test(url);
      },
      message: 'Некорректный url',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return reqexUrl.test(url);
      },
      message: 'Некорректный url',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return reqexUrl.test(url);
      },
      message: 'Некорректный url',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
