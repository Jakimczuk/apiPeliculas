const router = require('express').Router();
const { Character } = require('../../db');
const { Movie } = require('../../db')
router.get('/', async (req, res) => {
    try {
        const name = req.query.name
        const characters = await Character.findAll({
            where: {
                name: name
            }
        })
        res.json(characters);

    } catch (error) {
        try {
            const age = req.query.age
            const characters = await Character.findAll({
                where: {
                    age: age
                }
            })
            res.json(characters);
        } catch (error) {
            try {
                const movies = req.query.movies
                const characters = await Character.findAll({
                    where: {
                        id: movies
                    }
                })
                res.json(characters)
            } catch (error) {
                const character = await Character.findAll({
                    attributes: [
                        'imagen',
                        'name'
                    ]
                })
                res.json(character);
            }
        }
    }
})

router.get('/all', async (req, res) => {
    const characters = await Character.findAll({
        include: {
            model: Movie,
            as: 'movies',
            attributes: ['title']
        }

    })
    res.json(characters)
})

router.post('/', async (req, res) => {
    const character = await Character.create(req.body);
    res.json(character);
})

router.put('/:characterId', async (req, res) => {
    await Character.update(req.body, {
        where: { id: req.params.characterId }
    })
    res.json({ success: 'se ha modificado correctamente' })
})

router.delete('/:characterId', async (req, res) => {
    await Character.destroy({
        where: { id: req.params.characterId }
    });
    res.json({ success: 'se ha borrado correctamente' })
})

module.exports = router;