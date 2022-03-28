module.exports = (sequelize, type) => {  //exporto una funcion que voy a reutilizar
    return sequelize.define('movie', { //recibe el nombre de la tabla que vamos a generar
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        imagen: type.STRING,
        title: type.STRING,
        score: type.INTEGER

    })
};