import React from 'react';
//import { useDispatch, useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

import './ProductCard.css'
//import { useParams } from "react-router-dom";

//import { Link } from "react-router-dom";
//import { deleteProduct } from "../../redux/actions";


const ProductCard = (props) => {
      
  return (
    <div  class="flex-item">
       <h3 className="temperament">{props.name}</h3>
       <a href={`/dogs/${props.name}`}><img  className="image" src={props.image}  alt={props.name}/>  </a>
    
    
    <h5 className="temperament"><strong>Temperament: </strong>
    {(props.temperament)?props.temperament.split(',').slice(0,3):null} </h5>
    <h5 className="temperament">{(props.temperament)? props.temperament.split(',').slice(4,8):null} </h5>
    <h5 className="temperament">{ (props.temperament)?props.temperament.split(',').slice(9,14):null} </h5>
    
    <h5 className="temperament">Weight: {props.weight}</h5>
    <h5 className="temperament">Height: {props.height}</h5>
    

    </div>
  );
};

export default ProductCard;