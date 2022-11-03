import React from 'react';
//import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


const ProductCard = (props) => {
  
  const dispatch = useDispatch();
  const handleOnClick = (e) => {e.preventDefault();
  dispatch(deleteProduct(props.id))}
  return (
    <div>
    <button onClick={(e) => handleOnClick(e)}>x</button>
    <Link to={`/dogs/${props.id}`}></Link>
    <h3>{props.name}</h3>
    <img src={props.image} alt={props.name} />
    <p>Weight: {props.Weight.metric}</p>
    <p>Height: ${props.height.metric}</p>

    </div>
  );
};

export default ProductCard;