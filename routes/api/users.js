const router = require('express').Router();

router.get('/', (req, res) => {

    res.send('entra correctamente funciona , routes/api/users js');
})

module.exports = router;