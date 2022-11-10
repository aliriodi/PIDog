import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllDogs /*, movepage*/ } from "../../redux/actions";
import './DogDetail.css'


// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class DogDetail extends Component {
  constructor(props){
    super(props);
    this.state = {ExistDog:true,message:''}
    this.test = this.test.bind(this);
  }
  componentDidMount() {
    this.props.getAllDogs();
    
  }
  test(){
  if(this.props.match.params.id==='noExists' ){
     return "Dog Doesn't Exist!!! Try Again."
     }
     
     };

  render() {
       return (
      <div >   
        <p className="temperament"><b>{this.test() } </b>
      </p>
          
       <div >         
        { 
        this.props.dogs &&
          this.props.dogs
                     .filter(property => property.name=== this.props.match.params.id)
                     .map((curr) => {
            return (
               <div>
               <h2  className="temperament">  {curr.name}</h2>
               <img className="image" src={curr.image.url}  alt={curr.name}/>
               <h5  className="temperament"><b>Temperamento: </b><p> {curr.temperament}</p></h5>
               <h4  className="temperament"><b>weight:</b> {curr.weight.metric} Cm</h4>
              <h4  className="temperament"> <b>height: </b>{curr.height.metric} Kg</h4>
              <h4  className="temperament"> <b>Years Life:</b> {curr.life_span} </h4>
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
