const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple')

router.get('/', (req, res) => {

    res.send('entra correctamente funciona , routes/api/users js');
})

router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email debe ser correcto').isEmail()
], async (req, res) => {

    const errors = validationResult(req);     //le pasa los campos validados en el check
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() })
    }


    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body);
    res.json(user);
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email} });

    if (user) {
        const iguales = bcrypt.compareSync(req.body.password , user.password)
        if(iguales){
            res.json({ success : createToken(user)});

        }else{
            res.json({ error: 'error en user o password' })
        }

    } else {
        res.json({ error: 'error en user o password' })
    }
});

const createToken = (user) =>{
 const payLoad = {
     userId : user.id,
     createdAt : moment().unix(),
     expiredAt : moment().add( 5 , 'minutes').unix()
 }
    return jwt.encode(payLoad , 'userToken');
}

module.exports = router;