const express = require('express');
const mongoose = require('mongoose');

const { PORT, DATABASE_URL } = require('./ustils/config');

const app = express();
/* eslint-disable no-alert, no-console */
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('База данных подключена'))
  .catch((err) => {
    console.log('\x1b[31m%s\x1b[0m', 'Ошибка в подключении БД');
    console.error(err);
  });
/* eslint-enable no-alert, no-console */

/* eslint-disable no-alert, no-console */
app.listen(PORT, () => {
  console.log(`Сервер запущен, порт ${PORT}`);
});
/* eslint-enable no-alert, no-console */
