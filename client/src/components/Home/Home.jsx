import React, { Component } from 'react';

import {connect} from 'react-redux'
import { getAllDogs /*, movepage*/ } from "../../redux/actions";
import ProductCard from "../../components/ProductCard/ProductCard";

import './Home.css'
// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllDogs();
   
  }
  
  render() {
    const dogs2 =[];
    function pasarLista(perro, indice) {
      dogs2.push(perro);
      ;}
  
       return (
      <div class="flex-container"> 

       <div class="flex-item">         
        { 
        this.props.dogs &&
          this.props.dogs.slice(8*(this.props.pagination.idPageNow-1),
          8*(this.props.pagination.idPageNow-1)+8).map((curr) => {
            return (
              <ProductCard
                key={curr.id}
                id={curr.id}
                name={curr.name}
                temperament={curr.temperament}
                weight={curr.weight.metric}
                height={curr.height.metric}
                image={curr.image.url}
                
              />
            );
          })}
         </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { dogs: state.dogs ,
           pagination: state.pagination 
          };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllDogs: () => dispatch(getAllDogs()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
