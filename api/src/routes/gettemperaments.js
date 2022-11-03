const {  Temperament  } = require('../db');

gettemperaments = async (req,res) => {

    try{
        //Me conecto a la BD Temperament y paso las columnas 
        //a consultar mediante los attributes
         const Temperaments = await Temperament.findAll (
          {attributes: ['id',
                        'temperament']}
         ); 
   
       res.json(Temperaments);
     
     }  catch (error) {
       res.send(error);
     } };   

     module.exports = gettemperaments;