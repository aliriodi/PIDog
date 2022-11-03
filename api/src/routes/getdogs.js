
const {  Dog , Temperament ,  DogTemperament} = require('../db');
const { Op } = require('sequelize');

getdogs = async (req,res) => {
  let name=req.query.name;
 // console.log(name);
 //Con estas dos lineas lo que hago es que siempre busque
 //con el nombre, en caso de que el nombre no exista en el query
 //con el {[Op.like]: '%'} es como un * en el nombre para la BD
 if(!name){name={[Op.like]: '%'};}
 else {name=name;};
 
        try{
         const dogs2 = await Dog.findAll (
          {where: {name:name},
                 attributes: ['id',
                        'name',
                        'heightMin',
                        'heightMax',
                        'weightMin',
                        'weightMax',
                        'oldYearMin',
                        'oldYearMax']}
         ); 
   
         
         //Testingf
         // console.log(dogs2.dataValues );
         // console.log('otro');
         // console.log(dogs2[0].dataValues );
         // console.log('otro');
         // console.log(dogs2[1].dataValues )
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
                   heigth: {metric:sweetItem.heightMin+' - '+sweetItem.heightMax},
                   weight:{metric:sweetItem.weightMin+' - '+sweetItem.weightMax},
                   life_span:sweetItem.oldYearMin +' - '+sweetItem.oldYearMax}
            
       })
    
/* ubicando temperamentos de perro */
let DogTemperaments=undefined;
try{
    //Me conecto a la BD Temperament y paso las columnas 
    //a consultar mediante los attributes
      DogTemperaments = await DogTemperament.findAll (
      {attributes: ['dogId',
                    'temperamentId']
                }
     ); //res.json(DogTemperaments);
   
  }  catch (error) {
   res.send(error);
 } 
 
/* */
/* Haciendo cruce de Id para determinar nombres de los temperamentos */
//console.log('longitud '+DogTemperaments.length);
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
      temp+=temp2+ Temperaments[0].dataValues.temperament;
     outdogIdTemp[DogTemperaments[i].dataValues.dogId-1]={
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
            heigth:sweetItem.heigth ,
            weight:sweetItem.weight,
            life_span:sweetItem.life_span,
            temperament:outdogIdTemp[sweetItem.id-1].temperaments,
            from:outdogIdTemp[sweetItem.id-1].from
         }      
});
//console.log(outdogIdTemp[0].length+' '+array2.length);
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
     } 
    };   

     module.exports = getdogs;