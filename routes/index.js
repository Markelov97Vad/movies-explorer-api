const router = require('express').Router();

const { createUser, login, logout } = require('../controllers/users');
const { registrationValidation, loginValidation } = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');
const auth = require('../middlewares/auth');
const moviesRouter = require('./movies');
const usersRouter = require('./users');

router.post('/signup', registrationValidation, createUser);
router.post('/signin', loginValidation, login);
router.post('/signout', logout);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Ресурс не найден. Проверьте URL и метод запроса'));
});

module.exports = router;
