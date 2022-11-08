import React from 'react';
//import { useDispatch, useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

import './ProductCard.css'
//import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
//import { deleteProduct } from "../../redux/actions";

  
const ProductCard = (props) => {
      
  return (
    <div>
    
    <Link to={`/dogs/${props.name}`}>  </Link>
   
    <h3>{props.name}</h3>
    <img className="image" src={props.image}  alt={props.name}/>
    <p>Temperament: {props.temperament}</p>
    <p>Weight: {props.weight}</p>
    <p>Height: {props.height}</p>

    </div>
  );
};

export default ProductCard;