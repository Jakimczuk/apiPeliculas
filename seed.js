const { sequelize } = require('./db')
const { Movie } = require('./db');
const { Gender } = require('./db');
const { Character } = require('./db');



const genders = [
    { name: "Terror", imagen: "-" },
    { name: "Aventura", imagen: "-" ,movieId:1},
    { name: "Accion", imagen: "-" },
    { name: "Drama", imagen: "-" },
]

const characters = [
    { imagen: "-", name: "Sid", age: 33, weight: 50, history: "-" },
    { imagen: "-", name: "Kocoum", age: 55, weight: 80, history: "-" },
    { imagen: "-", name: "Koda", age: 12, weight: 35, history: "-" },
    { imagen: "-", name: "Rhino", age: 2, weight: 1, history: "-" },
]

const movies = [
    { imagen: "-", title: "La hera de hielo", score: 5, characterId: 1 },
    { imagen: "-", title: "Pocahontas", score: 4, characterId: 2 },
    { imagen: "-", title: "Hermano oso", score: 3, characterId: 3 },
    { imagen: "-", title: "Bolt", score: 5, characterId: 4 }
]

sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar Characters
    characters.forEach(character => Character.create(character));
}).then(() => {
    // Rellenar Gender
    genders.forEach(gender => Gender.create(gender));
}).then(() => {

    // Rellenar movies
    movies.forEach(movie => Movie.create(movie));
});