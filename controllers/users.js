const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { handleErrors } = require('../ustils/handleError');
const NotFoundError = require('../errors/NotFoundError');
const { OK_CODE, CREATED_CODE } = require('../ustils/codeStatus');

// # возвращает информацию о пользователе (email и имя)
// GET /users/me

// # обновляет информацию о пользователе (email и имя)
// PATCH /users/me

// const login = (req, res, next) => {
//   const { email, password } = req.body;
//   User.
// }

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  return bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      const newUser = user.toObject();
      delete newUser.password;
      res.status(CREATED_CODE).send(newUser);
    })
    .catch((err) => handleErrors(err, next));
};

const getCurrentUser = (req, res, next) => {
  const { _id } = req.user;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь по указанному Id не найден.');
      }
      return res.status(200).send(user);
    })
    .catch((err) => handleErrors(err, next));
};

const setUserInfo = (req, res, next) => {
  const { _id } = req.user;
  const { name, about } = req.body;

  return User.findByIdAndUpdate(
    _id,
    { name, about },
    { new: true, runValidators: true },
  ).then((user) => {
    if (!user) {
      throw new NotFoundError('Пользователь с указанным id не найден.');
    }
    return res.status(OK_CODE).send(user);
  }).catch((err) => handleErrors(err, next));
};

module.exports = {
  createUser,
  getCurrentUser,
  setUserInfo,
};
