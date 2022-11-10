import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllDogs /*, movepage*/ } from "../../redux/actions";



// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class DogDetail extends Component {
  
  componentDidMount() {
    this.props.getAllDogs();
   
  }
  render() {
    return (
      <div > 
       {/* alert(this.props.match.params.id)*/}
       <div >         
        { 
        this.props.dogs &&
          this.props.dogs
                     .filter(property => property.name=== this.props.match.params.id)
                     .map((curr) => {
            return (
               <div>
             
              <p> {/*alert(curr.length)*/}</p>
               <h1> {curr.name}</h1>
               <img className="image" src={curr.image.url}  alt={curr.name}/>
               <h4>Temperamento:  {curr.temperament}</h4>
               <h4>weight (metric): {curr.weight.metric}</h4>
              <h4> height (metric): {curr.height.metric}</h4>
              <h4> Years Life: {curr.life_span} </h4>
           </div>         
            
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
export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);
