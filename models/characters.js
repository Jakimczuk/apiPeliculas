module.exports = (sequelize, type) => {
    return sequelize.define('character', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: type.STRING,
        name: type.STRING,
        age: type.INTEGER,
        weight: type.INTEGER,
        history: type.STRING,


    })
};