const Sequelize = require('sequelize');

const MovieModel = require('./models/movies');
const UserModel = require('./models/users');
const GenderModel = require('./models/gender');
const CharacterModel = require('./models/characters')



const sequelize = new Sequelize('apipeliculas', 'root', '', { //primero el nombre de la bd , user,pass y un objeto
    host: 'localhost',
    dialect: 'mysql'
});

const Movie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Gender = GenderModel(sequelize, Sequelize);
const Character = CharacterModel(sequelize, Sequelize);

Character.hasMany(Movie, { as: 'movies', foreignKey: 'characterId' })
Movie.belongsTo(Character, { as: 'moviesCharacter' })


Movie.hasMany(Gender, { as: 'genero', foreignKey: 'movieId' })
Gender.belongsTo(Movie, { as: 'generos' })

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })



module.exports = {
    Movie,
    User,
    Gender,
    Character,
    sequelize
}

