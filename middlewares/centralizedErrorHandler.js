const { SERVER_ERROR_CODE, SERVER_ERROR_MESSAGE } = require('../ustils/config');

module.exports.centralizedErrorHandler = (err, req, res, next) => {
  const { statusCode = SERVER_ERROR_CODE, message } = err;
  res
    .status(err.statusCode)
    .send({
      message: statusCode === SERVER_ERROR_CODE
        ? SERVER_ERROR_MESSAGE
        : message,
    });
  next();
};
