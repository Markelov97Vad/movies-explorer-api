const router = require('express').Router();

const { createUser } = require('../controllers/users');
const usersRouter = require('./users');

router.post('/signup', createUser);

router.use('/users', usersRouter);

module.exports = router;
