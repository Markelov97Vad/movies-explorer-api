const UnauthorizedError = require('../errors/UnauthorizedError');
const jwt = require('jsonwebtoken');
const { checkJWT } = require('../ustils/config');

module.exports = (req, res, next) => {
  // const { authorization } = req.headers;

  // if (!authorization || !authorization.startsWith('Bearer ')) {
  //   return next(new UnauthorizedError('Необхадима авторизация'));
  // }
  // const token = authorization.replace('Bearer ', '');
  // console.log(req);
  const token = req.cookies.jwt;
  // console.log(req.cookies.accToken);
  if (!token) {
    // console.log('11111');
    return next(new UnauthorizedError('OOO Необхадима авторизация'));
  }

  let payload;

  try {
    payload = jwt.verify(token, checkJWT);
    console.log(req.cookies);
    console.log(req.cookies.jwt);
  } catch (error) {
    return next(UnauthorizedError('Необхадима авторизация'));
  }
  req.user = payload;
  return next();
};
