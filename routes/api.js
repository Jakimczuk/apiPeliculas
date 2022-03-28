const router = require('express').Router();

const apiMoviesRouter = require('./api/movies');
const apiCharactersRoutes = require('./api/characters');
const apiGendersRoutes = require('./api/genders');
const apiUsersRoutes = require('./api/users');

router.use('/movies', apiMoviesRouter);
router.use('/characters', apiCharactersRoutes);
router.use('/genders', apiGendersRoutes);
router.use('/users', apiUsersRoutes);

module.exports = router;