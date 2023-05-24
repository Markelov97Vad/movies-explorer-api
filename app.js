require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const { PORT, DATABASE_URL } = require('./ustils/config');
const { centralizedErrorHandler } = require('./middlewares/centralizedErrorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes');
const productionJwtCheck = require('./ustils/productionJwtCheck');

const app = express();

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('База данных подключена'))
  .catch((err) => {
    console.log('\x1b[31m%s\x1b[0m', 'Ошибка в подключении БД');
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(requestLogger);
// функционал роутинга
app.use(router);

app.use(errorLogger);

app.use(errors());
// централизированная обработка ошибок
app.use(centralizedErrorHandler);

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('\x1b[33m%s\x1b[0m', 'Код запущен в режиме разработки');
  }
  productionJwtCheck();
  console.log(`Сервер запущен, порт ${PORT}`);
});
