

require("dotenv").config();
const fs = require ('fs');
///console.log(process.env.API_TOKEN);
//console.log("https://api.thedogapi.com/v1/breeds?api_key="+process.env.API_TOKEN)
let web1=1;
let web;
if(web1===0){web="https://api.thedogapi.com/v1/breeds?api_key="+process.env.API_TOKEN;}
else {web ="http://localhost:3001/dogs/";};
console.log(web);
web="https://api.thedogapi.com/v1/breeds?api_key="+process.env.API_TOKEN;
web1 ="http://localhost:3001/dogs/";

function test (){
return fetch("https://api.thedogapi.com/v1/breeds?api_key="+process.env.API_TOKEN)
      .then((response) => response.json())
     // .then((json) => console.log(json))
}

function test2 (){
    return fetch("http://localhost:3001/dogs")
          .then((response) => response.json())
        //  .then((json) => console.log(json))
    }
 
  function test3(){  
return fetch("https://api.thedogapi.com/v1/breeds?api_key="+process.env.API_TOKEN)
      .then((response) => response.json())
      .then((json) => json.concat((function () {fetch("http://localhost:3001/dogs/")
      .then((response) => response.json())})()))
    .then((json2)=> console.log(json2.length))  ;
  }
//Grabando json local
  function test4(){  
    return fetch("https://api.thedogapi.com/v1/breeds?api_key="+process.env.API_TOKEN)
          .then((response) => response.json())
          .then((json) => json.concat((function () {fetch("http://localhost:3001/dogs/")
          .then((response) => response.json())})()));
      }
  //return [test(),test2(),test3()] 
// const { json } = require("sequelize");
     
 const objectToSave1 = async function objectToSave(){
     const salida = await test();
     const salida2 =  RNFS.writeFile('archivo.json', JSON.stringify(salida),'utf8', (err) => { 
      if (err) throw err; 
      console.log('The file has been saved! por ALIRIO');
      //const salida3 = await test2();
       });  
     return salida2}

  //console.log(JSON.parse(test4()));
    
  // fs.writeFile('archivo.json', JSON.stringify(apis),'utf8', (err) => { 
  //   if (err) throw err; 
  //   console.log('The file has been saved!'); 
  // }); 

    
 const objectToSave2 = async function objectToSave(){
  const salida = await test();
  const salida2 =  fs.writeFile('archivo.json', JSON.stringify(salida),'utf8', (err) => { 
   if (err) throw err; 
   console.log('The file has been saved! por ALIRIO');
   //const salida3 = await test2();
    });  
  return salida2}
  objectToSave2();
 //export {objectToSave1}; 