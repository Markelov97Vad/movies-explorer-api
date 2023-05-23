const express = require('express');
const mongoose = require('mongoose');

const { PORT, DATABASE_URL } = require('./ustils/config');
const { errorHandler } = require('./middlewares/errorHandler');
const router = require('./routes');

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

// функционал роутинга
app.use(router);
// централизированная обработка ошибок
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер запущен, порт ${PORT}`);
});
