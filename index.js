const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //config basica para que la app reciba peticiones post

app.use('/api', apiRouter);    //todas las rutas que vengan con el prefijo /api las manda a apiRouter



app.listen(3000, () => {
    console.log('servidor arrancado')
});