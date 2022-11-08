
const {  Dog , Temperament ,  DogTemperament} = require('../db');


getdogsidraza = async (req,res) => {

let ID=req.params.id;
let Dogid = undefined;
  //Alirio Chequea primero si el ID de la raza existe
  try{
    //Me conecto a la BD Temperament y paso las columnas 
    //a consultar mediante los attributes
      Dogid = await Dog.findAll ({
        where: {id:ID},
        attributes: ['name']
    });   
   
 
}  catch (error) { 
   res.send(error);
 }  //Si el perro no existe mando un res 
 if(!Dogid[0])
  {res.json({DogId: 'doesnt exist ID',
             id:ID,
             from:'localhost'}
             );}
else {
 //Si el perro existe
        try{
         const dogs2 = await Dog.findAll (
          {where: {id:ID},
            attributes: ['id',
                        'name',
                        'heightMin',
                        'heightMax',
                        'weightMin',
                        'weightMax',
                        'oldYearMin',
                        'oldYearMax']}
         ); 
         let array1 = dogs2;
         let array3 =[];
         let temp;
         let aux = 0;
         let outdogIdTemp = []; // vector que contiene objetos 
                                //DogId y Temperamentos
         //acomodando el Json para que se parezca al de API dog
         let array2 = array1.map(sweetItem => {
           return {id:sweetItem.id, 
                   name:sweetItem.name, 
                   height: {metric:sweetItem.heightMin+' - '+sweetItem.heightMax},
                   weight:{metric:sweetItem.weightMin+' - '+sweetItem.weightMax},
                   life_span:sweetItem.oldYearMin +' - '+sweetItem.oldYearMax}         
       })

/* ubicando temperamentos de perro */
let DogTemperaments=undefined;
try{
    //Me conecto a la BD Temperament y paso las columnas 
    //a consultar mediante los attributes
      DogTemperaments = await DogTemperament.findAll (
      {where: {dogId:ID},
        attributes: ['dogId',
                    'temperamentId']
                }
     ); //res.json(DogTemperaments);
   
  }  catch (error) {
   res.send(error);
 } 
 
/* */
/* Haciendo cruce de Id para determinar nombres de los temperamentos */
//console.log('longitud '+DogTemperaments.length);
for(let i=0;i<DogTemperaments.length;i++)
{     
    let temp2=',';
     if(aux!=DogTemperaments[i].dataValues.dogId){
        temp='';
        temp2='';
        aux=DogTemperaments[i].dataValues.dogId;
    };
 //console.log(DogTemperaments[i].dataValues.dogId+' '+DogTemperaments[i].dataValues.temperamentId )
 try{
    //Me conecto a la BD Temperament y paso las columnas 
    //a consultar mediante los attributes
     const Temperaments = await Temperament.findAll ({
        where: {id:DogTemperaments[i].dataValues.temperamentId},
        attributes: ['temperament']
    }); 
  //temp.push(Temperaments[0].dataValues.temperament);
  //arreglo temperamentos para que se parezcan al de la api dogs
      temp+=temp2+ Temperaments[0].dataValues.temperament;
        outdogIdTemp[DogTemperaments[i].dataValues.dogId-1]={
          /**Le agrego propiedad de fuente para saber si  
             viene de la api o de mi localhost
          */
        from:'localhost', 
        id:DogTemperaments[i].dataValues.dogId,
        temperaments:temp};
///console.log(Temperaments[0].dataValues.temperament); 
   // res.json(DogTemperaments);
//console.log(Temperaments[0].dataValues.temperament);
}  catch (error) {
   res.send(error);
 } 
/* cerrando el for de traduccion de Dog Temperamento*/}
/* */
array3 = array2.map(sweetItem => {
    return  {
            id:sweetItem.id, 
            name:sweetItem.name, 
            height:sweetItem.height ,
            weight:sweetItem.weight,
            life_span:sweetItem.life_span,
            temperament:outdogIdTemp[sweetItem.id-1].temperaments,
            from:outdogIdTemp[sweetItem.id-1].from
         }      
});
//console.log(outdogIdTemp[0].length+' '+array2.length);
//console.log(req.params);
//console.log(req.params.id);
 res.json(array3);
   
     //   [ ] Raza con las siguientes propiedades:
     // ID *
     // Nombre *
     // Altura *
     // Peso *
     // Años de vida
     // [ ] Temperamento con las siguientes propiedades:
     // ID
     // Nombre
     }  catch (error) {
       res.send(error);
     } };  
    /**cierre else donde perro si existe*/ };
     module.exports = getdogsidraza;