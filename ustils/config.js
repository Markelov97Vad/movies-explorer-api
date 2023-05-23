const { PORT = 3000, DATABASE_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;
// const regexUrl = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
const { NODE_ENV, JWT_SECRET } = process.env;
const JWT_SECRET_DEV = 'some-secret-key';
const ID_DEV = '6453eb794cc906a7f9131c00';

const checkJWT = NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV;

module.exports = {
  PORT,
  DATABASE_URL,
  JWT_SECRET_DEV,
  ID_DEV,
  checkJWT,
};
