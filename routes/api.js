const router = require('express').Router();

const apiMoviesRouter = require('./api/movies');
const apiCharactersRoutes = require('./api/characters');
const apiGendersRoutes = require('./api/genders');
const apiUsersRoutes = require('./api/users');

const tokenValidation = require('./middlewares');

router.use('/auth', apiUsersRoutes);
router.use('/movies', tokenValidation.checkToken, apiMoviesRouter);
router.use('/characters', tokenValidation.checkToken ,apiCharactersRoutes);
router.use('/genders', tokenValidation.checkToken , apiGendersRoutes);


module.exports = router;