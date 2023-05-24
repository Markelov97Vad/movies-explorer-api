const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const NotFoundError = require('../errors/NotFoundError');
const { OK_CODE, CREATED_CODE } = require('../ustils/codeStatus');
const { checkJWT } = require('../ustils/config');
const { handleError } = require('../ustils/handleError');

const { NODE_ENV } = process.env;

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  return bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      const newUser = user.toObject();
      delete newUser.password;
      res.status(CREATED_CODE).send(newUser);
    })
    .catch((err) => handleError(err, next));
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentails(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        checkJWT,
        { expiresIn: '7d' },
      );
      const newUser = user.toObject();
      delete newUser.password;
      return res
        .cookie(
          'jwt',
          token,
          {
            httpOnly: true,
            secure: NODE_ENV === 'production',
            sameSite: 'none',
          },
        )
        .send(newUser);
    })
    .catch(next);
};

const logout = (req, res) => {
  res
    .clearCookie('jwt')
    .send({ message: 'Выход выполнен успешно!' });
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
    .catch((err) => handleError(err, next));
};

const setUserInfo = (req, res, next) => {
  const { _id } = req.user;
  const { name, email } = req.body;

  return User.findByIdAndUpdate(
    _id,
    { name, email },
    { new: true, runValidators: true },
  ).then((user) => {
    if (!user) {
      throw new NotFoundError('Пользователь с указанным id не найден.');
    }
    return res.status(OK_CODE).send(user);
  }).catch((err) => handleError(err, next));
};

module.exports = {
  createUser,
  login,
  logout,
  getCurrentUser,
  setUserInfo,
};
