const UnauthorizedError = require('../errors/UnauthorizedError');
const jwt = require('jsonwebtoken');
const { checkJWT, UNAUTHORIZED_AUTH_MESSAGE } = require('../ustils/config');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new UnauthorizedError(UNAUTHORIZED_AUTH_MESSAGE));
  }

  let payload;

  try {
    payload = jwt.verify(token, checkJWT);
  } catch (error) {
    return next(UnauthorizedError(UNAUTHORIZED_AUTH_MESSAGE));
  }

  req.user = payload;
  return next();
};
