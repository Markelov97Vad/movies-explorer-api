const { SERVER_ERROR_CODE } = require('../ustils/codeStatus');

module.exports.errorHandler = (err, req, res, next) => {
  const { statusCode = SERVER_ERROR_CODE, message } = err;
  res
    .status(err.statusCode)
    .send({
      message: statusCode === SERVER_ERROR_CODE
        ? 'На сервере произошла ошибка'
        : message,
    });
  next();
};
