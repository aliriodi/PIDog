const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
//Codigo Alirio, trayendo las tablas de la BD
const {  Dog , Temperament , DogTemperament } = require('./db.js');
//
require('./db.js');

const server = express();
//Codigo Alirio
//server.use(express.json());
//
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  console.log(req.path);
  next();
});
//Codigo Alirio
//Escribiendo en la BD la tabla de dogs

server.post('/dogs',async (req, res) => {
  const { name , image, heightMax, heightMin, weightMin, weightMax, oldYearMin, oldYearMax, temperament, createdFor } = req.body;
  let dogId = undefined;
  let temperamentId = [];
  const checkDog = await Dog.findAll(
    { where:{name} }
  ); 
  //Analizando si perro ya existe
  if(checkDog[0]){ dogId= checkDog[0].dataValues.id;
    if(dogId){
    //console.log(dogId);
    //Si perro existe devuelmeme un JSON con el siguiente objeto
    res.json({BD_Has_THIS_Dog:'yes',name:name});}} 
  else{  
    //Si perro no existe crealo
  try {
    const newDog = await Dog.create({
      name,
      image,
      heightMax,
      heightMin, 
      weightMin,
      weightMax, 
      oldYearMin, 
      oldYearMax, 
      createdFor 
    }); 
    //Si el perro se escribe dame su dogID de la tabla dogs 
    // para luego usarlo en la tabla muchos a muchos
    // de perros vs temperamentos
    const checkDog = await Dog.findAll(
      { where:{name} }
    ); 
    //Piso el undefined por el nuevo dogID creado
    dogId= checkDog[0].dataValues.id;
    //res.json(newDog);
    //forma ampliada de ver el dato
    //console.log(newDog); 
    //forma resumida de ver el dato con sus caracteristicas
    //console.log(newDog.toJSON());  
      
  } catch (error) {
    res.send(error);
  }
 
  //acomodando el string para luego transformar el string
  //array  y poder escribirlo uno a uno las temperamentos
   let temperament3 = temperament.split(',');
   temperament3[0]=temperament3[0].slice(1);
   const long = temperament3.length;
   temperament3[long-1] = temperament3[long-1].slice(0,-1);
   let temperament2 = undefined;
  for(let i=0;i<long;i++){
   temperament2 = temperament3[i] ;
   //Si el temperamento existe no lo escribas
   const checkTemperament = await Temperament.findAll(
    { where:{temperament:temperament2} }
  ); 
  if(checkTemperament[0]){console.log('Temperamento existe no se crea');
  //Buscando el Id de temperamento para la tabla
  //de Dog vs Temperament
  const temperamentoIDs = await Temperament.findAll(
    //Busca en la tabla de temperamentos el 
    // ID        temperamento
    // numero    temperamento2
    { where:{ temperament:temperament2 } }
  ); 
  //Agregando temperamentId a mi arreglo de IDs de temperamentos
  temperamentId.push(temperamentoIDs[0].dataValues.id);
}
  else {
    //creando temperamentos 
     try {
    const newTemperament = await Temperament.create({
      temperament:temperament2,
      createdFor
    });
  //  forma resumida de ver el dato con sus caracteristicas
  //console.log(newTemperament.toJSON());
     const temperamentoIDs = await Temperament.findAll(
      //Busca en la tabla de temperamentos el 
      // ID        temperamento
      // numero    temperamento2
      { where:{ temperament:temperament2 } }
    ); 
    //Agregando temperamentId a mi arreglo de IDs de temperamentos
    temperamentId.push(temperamentoIDs[0].dataValues.id);
    //console.log(temperamentId)
  } 
  catch (error) {
    res.send(error); } 
  /*cerrando else if de temperamento existe*/};
  /* cerrando ciclo for insercion Temperametos*/}
  

 //creando tabla de Perros vs Temperamento
 
 for(let i =0; i<temperamentId.length;i++){
 try {
  //let dogId=1; //Prueba para la creacion de codigo
  console.log(dogId);
  //console.log('array temperamentos '+ temperamentId)
  //let temperamentId=1;
  //temperamentId = temperamentId[1];
  const temperamentId2=temperamentId[i];
  const newDogTemperamenti = await DogTemperament.create({
    dogId,
    temperamentId:temperamentId2
  });
  //forma resumida de ver el dato con sus caracteristicas
 // console.log(newTemperament.toJSON());
   
} catch (error) {
  res.send(error);
} 
  /*cerrando el for de la promesa Dog Temperament*/ }
  
res.json(req.body);
  }
});

// //Escribiendo en la BD en la tabla temperaments
// server.post('/temperaments',async (req, res) => {
//   const { temperament , createdFor} = req.body;
//   try {
//     const newTemperament = await Temperament.create({
//       temperament,
//       createdFor
//     });
//     //forma resumida de ver el dato con sus caracteristicas
//     //console.log(newTemperament.toJSON());  
//     res.json(newTemperament);
   
//   } catch (error) {
//     res.send(error);
//   }
// });

// server.post('/dogtemperament',async (req, res) => {
//   const { dogId , temperamentId} = req.body;
//   try {
//     const newdDogTemperament = await DogTemperament.create({
//       dogId,
//       temperamentId
//     });
//     //forma resumida de ver el dato con sus caracteristicas
//     //console.log(newdDogTemperament.toJSON());  
//     res.json(newdDogTemperament);
   
//   } catch (error) {
//     res.send(error);
//   }
// });

//

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
