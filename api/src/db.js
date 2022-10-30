require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  
});
const basename = path.basename(__filename);
//const basename = path.basename();
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

//Estos son mis 2 modelos o Tablas en mi BD
const { Dog , Temperament} = sequelize.models; 

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Dog.belongsToMany(Temperament, { through: "DogTemperament"});
Temperament.belongsToMany(Dog, { through: "DogTemperament"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

//sequelize.models.dog.sync();
//Crea las tablas si no existe o no hace nada si ya existe
//si hay modificaciones en el modelo no hace nada

//sequelize.models.dog.sync({force: true}); 
//sincronizo el modelo de nombre 'dog' del archivo Dog.js 
// y elimino las tablas y las vuelvo a crear con todos los campos  

//sequelize.models.dog.sync({alter: true}); 
// Actualiza las tablas en caso de ser posible
// y las modifica en caso de que el modelo 'dog' haya creeado nbuevos
// campos en el archivo Dog.js

//sequelize.sync({force: true});
