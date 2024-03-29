const {  Temperament } = require('../db');

const postTemperaments = async (req,res) => {
    const { name ,
        image, 
        heightMax, 
        heightMin, 
        weightMin, 
        weightMax, 
        oldYearMin, 
        oldYearMax, 
        temperament, 
        createdFor } = req.body;
    //acomodando el string para luego transformar el string
    //array  y poder escribirlo uno a uno las temperamentos
     let temperament3 = temperament.split(',');
     //Quitando el 1er caracter
    //  temperament3[0]=temperament3[0].slice(1);

     const long = temperament3.length;
     //quitando el ultimo caracter
    //  temperament3[long-1] = temperament3[long-1].slice(0,-1);
     let temperament2 = undefined;
     //Para quitar los espacios en blanco en caso de que exista
     for(let i=0;i<long;i++){
      if(temperament3[i][0]===" "){temperament3[i]=temperament3[i].slice(1);};
     } 
     for(let i=0;i<long;i++){
     temperament2 = temperament3[i] ;
     //Si el temperamento existe no lo escribas
     const checkTemperament = await Temperament.findAll(
      { where:{temperament:temperament2} }
    ); 
    if(checkTemperament[0]){console.log('Temperamento existe no se crea');
    //Buscando el Id de temperamento para la tabla
    //de Dog vs Temperament
    //const temperamentoIDs = await Temperament.findAll(
      //Busca en la tabla de temperamentos el 
      // ID        temperamento
      // numero    temperamento2
     // { where:{ temperament:temperament2 } }
   // ); 
   //res.send('temperamento existe No se Crea')
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
 // temperamentId.push(temperamentoIDs[0].dataValues.id);
  //console.log(temperamentId)
 
} 
catch (error) {
  res.send(error); } 
/*cerrando else if de temperamento existe*/};
/* cerrando ciclo for insercion Temperametos*/}
res.json('Temperamentos creados sin repeticion');

}

module.exports = postTemperaments;