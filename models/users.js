module.exports = (sequelize, type) => {  //exporto una funcion que voy a reutilizar
    return sequelize.define('user', { //recibe el nombre de la tabla que vamos a generar
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        username: type.STRING,
        password: type.STRING,
        email: type.STRING


    })
};