const jwt = require('jwt-simple');
const moment = require('moment')

const checkToken = ( req , res , next) =>{   //los middlewares tienen un tercer parametro , si todo esta ok ejecuta next


    if(!req.headers['user-token']) {
        return res.json({ error: 'Necesitas incluir el token en la cabecera'})
    }
    const userToken = req.headers['user-token'];
    let payLoad ={}


    try {
        payLoad = jwt.decode(userToken , 'userToken');
    } catch (error) {
        return res.json({ error: 'El token es incorrecto'})
    }

    if(payLoad.expiredAt < moment.unix()){
        return res.json({ error: 'El token a expirado , por favor vuelva a logearse'})
    }
req.usuarioId = payLoad.usuarioId;
next();
}   

module.exports ={
    checkToken : checkToken
}