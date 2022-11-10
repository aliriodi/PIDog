

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
  // console.log('prueba promesa');
  // objectToSave2();

  
  // console.log('Concatenacion de 2 promesas de iguales atributos objetos')
  // console.log('y sumarizando el json de salida para usarlo luego')
  
  function promesa2() {
    fetch("https://api.thedogapi.com/v1/breeds?api_key="+process.env.API_TOKEN)
    .then((response) => response.json())
   .then((json) => {
  //hasta aca tengo la salida Json en forma de 
  //array de objetos
    return  {json1: json[json.length - 1].id,
             json: json}})
  //aca tomo y mando en otro objeto
  //el maximo id como json1 y el json completo como json
  // con las salida inicio la 2da promesa para luego concatenarla
      .then((salida)=> fetch('http://localhost:3001/dogs')
                       .then((response) => response.json())
                       .then((json)=>{
  // de esta salida saco otro objeto con los dos ids maximos
  //y los datos json para iniciar la sumarizacion de datos luego                      
                                     return  {json1:salida.json1,
                                              jsond1:salida.json,
  /*Revision si el json2 tiene datos*/        json2:(json.length!==0)?json[json.length - 1].id:null,
  /*Si tiene datos saco el max id y la data*/ jsond2:(json.lenth!==0)? json : null }})
      .then((objmaster)=> { if(objmaster.jsond2.length!==0){for(let i=0;i<objmaster.jsond2.length;i++)
  /*con este for empiezo*/    {objmaster.jsond2[i].id +=objmaster.json1;
  /*a incrementar los ids*/    objmaster.jsond1.push(objmaster.jsond2[i])}}
  /*del json2 para luego pushar los nuevos */
  /* datos al json final */                                                
                          // console.log(objmaster.json1)
                          // console.log(objmaster.json2)
                          // console.log(objmaster.jsond1)
                          // console.log(objmaster.jsond2) 
  /*retorno el nuevo json */ return objmaster.jsond1
                        } ))
        //.then((json)=>console.log(json))                
   /*chequeo que el dato este sumarizado */ .then((json) =>   console.log(json));
  };
  /**Para probar la promesa descomentar la siguiente linea */
  //promesa2();

  function readJson () {

    console.log('this'+ ' ' +this)
    let vm = this
    // http://localhost:8080
    fetch('/archivo.json')
    .then((response) => response.json())
    .then((json) => console.log('json  ' +json)
    ).catch(function () {
        vm.dataError = true
    })
 }

   readJson()
 //export {objectToSave1}; 