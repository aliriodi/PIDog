import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllDogs /*, movepage*/ } from "../../redux/actions";
import WRITETEMP from "./writetemp.jsx" 
//import ProductCard from "../../components/ProductCard/ProductCard";
// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class CreateTemp extends Component {
  componentDidMount() {
    this.props.getAllDogs();       
    }
   
    render() {
    return (
      <div > 
        {this.props.dogs &&
          this.props.dogs.map((curr) => {
            return (
              <WRITETEMP temperament={curr.temperament} />
            );
          })}
         
      </div>
    );
  }

}

export const mapStateToProps = (state) => {
  return { dogs: state.dogs ,
           //pagination: state.pagination 
          };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllDogs: () => dispatch(getAllDogs()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTemp);
