import './App.css';
import React from 'react';
//import React, { useEffect ,useState} from 'react';
import { Route,Switch,} from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import DogDetail from "./components/DogDetail/DogDetail";
import CreateDog from "./components/CreateProduct/CreateProduct";
import  CreateTemp  from './components/CreateTemp/CreateTemp';

//import {objectToSave1} from "./alirio.js"


function App() {
 
    return (
  
    <div className="App" >       
        <Nav  />
        <Route exact path="/" component={CreateTemp}/>
        
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/dogs/create" component={CreateDog} />
        <Route exact path="/dogs/:id" component={DogDetail} />
      </Switch>
      <script src="./alirio.js" type="text/javascript" />
      </div>
  );
}
export default App;
