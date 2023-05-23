const router = require('express').Router();

const { createUser, login } = require('../controllers/users');
const usersRouter = require('./users');

router.post('/signup', createUser);
router.post('/signin', login);

router.use('/users', usersRouter);

module.exports = router;
