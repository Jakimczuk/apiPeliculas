const router = require('express').Router();
const { Gender } = require('../../db');



/*router.get('/' , async(req , res) =>{
    const gender = await Gender.findAll({
        attributes:[
            'name'
        ]
    });
    res.json(gender); 
})
*/
router.get('/', async (req, res) => {

    const gender = await Gender.findAll();
    res.json(gender)

})



router.post('/', async (req, res) => {
    const gender = await Gender.create(req.body);
    res.json(gender);
})

module.exports = router;