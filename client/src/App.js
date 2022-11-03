import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import DogDetail from "./components/DogDetail/DogDetail";
import CreateDog from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    
    <div className="App">
      <h1>Henry Dogs</h1>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/dogs/:id" component={DogDetail} />
      <Route exact path="/dogs/create" component={CreateDog} />
      </div>
  );
}

export default App;
