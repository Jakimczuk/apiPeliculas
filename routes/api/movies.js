const router = require('express').Router();
const { Movie } = require('../../db');


router.get('/all', async (req, res) => {
    const movie = await Movie.findAll()
    res.json(movie);
})

router.get('/', async (req, res) => {
    try {
        const name = req.query.name
        const movie = await Movie.findAll({ where: { name: name } })
        res.json(movie)
    } catch (error) {

        try {
            const gender = req.query.name
            const movie = await Movie.findAll({ where: { id_gender: id } })
            res.json(movie);
        } catch (error) {

        }

    }
    const movie = await Movie.findAll({
        attributes:
            ['imagen', 'title', ]
    });
    res.json(movie);
})

router.post('/', async (req, res) => {
    const movie = await Movie.create(req.body);
    res.json(movie);
})

router.put('/:movieId', async (req, res) => {
    await Movie.update(req.body, {
        where: { id: req.params.movieId }
    })
    res.json('Se ha modificado correctamente');
})

router.delete('/:movieId', async (req, res) => {
    await Movie.destroy({
        where: { id: req.params.movieId }
    })
    res.json('Se ha eliminado correctamente');
})

module.exports = router;