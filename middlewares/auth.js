const UnauthorizedError = require('../errors/UnauthorizedError');
const jwt = require('jsonwebtoken');
const { checkJWT } = require('../ustils/config');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new UnauthorizedError('OOO Необхадима авторизация'));
  }

  let payload;

  try {
    payload = jwt.verify(token, checkJWT);
  } catch (error) {
    return next(UnauthorizedError('Необхадима авторизация'));
  }

  req.user = payload;
  return next();
};
