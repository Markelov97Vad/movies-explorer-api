<h1 align="center">Дипломный проект: "Movies Explorer" (backend)</h1>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории</a></li>
      <li><a href="#functionality">Функционал</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Api для дипломного проекта <a href="https://github.com/Markelov97Vad/movies-explorer-frontend">Movies Explorer</a>. Проект создан на ```Express.js```, представляет собой написание серверной логики для объединения с частью фронтенда.

Проект задеплоен на виртуальную машину, размещенную на <a href="https://cloud.yandex.ru/">Яндекс Облаке</a>.

<b>Адрес репозитория:</b> https://github.com/Markelov97Vad/movies-explorer-api

<b>Ссылки на проект:</b>
<br>
IP: 51.250.90.36
<br>
Backend: https://api.marsello.diploma.nomoredomains.rocks

<b>Ссылка на чек-лист</b>
<br>
https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html

<i>* - проект прошел код-ревью</i>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории</h2></a>
1. `git clone https://github.com/Markelov97Vad/movies-explorer-api.git` - клонировать репозиторий (HTTPS) на свое устройство
2. `npm i` - установить зависимости
3. `npm run dev` - запустить приложение в режиме разработчика c hot-reload (в браузере ввести ссылку http://localhost:3000/, где 3000 - рабочий порт)
*  `npm run start` - запустить dev-режим сборки приложения

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>4. Функционал</h2></a>
- Регистрация и авторизация пользователя
- Аутентификация пользователя по JWT токену
- Редактирование данных пользователя
- Добавление фильма в личный кабинет
- Удаление фильма из личного кабинета

