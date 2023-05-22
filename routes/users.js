const usersRouter = require('express').Router();

const { getCurrentUser, setUserInfo } = require('../controllers/users');

usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', setUserInfo);

module.exports = usersRouter;
