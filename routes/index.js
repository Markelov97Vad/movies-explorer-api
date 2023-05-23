const router = require('express').Router();

const { createUser, login, logout } = require('../controllers/users');
const auth = require('../middlewares/auth');
const moviesRouter = require('./movies');
const usersRouter = require('./users');

router.post('/signup', createUser);
router.post('/signin', login);
router.post('/signout', logout);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
