
import React, { Component } from 'react';
//import {connect} from 'react-redux'
//import { getAllDogs /*, movepage*/ } from "../../redux/actions";

export default class WRITETEMP extends Component {
    componentDidMount() { 
      if(this.props.temperament){              
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ temperament:  this.props.temperament.toString() })
      };
      fetch('http://localhost:3001/temperaments/', requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ temperament: data.temperament }));
      } 
    }
    render() {
      return (
        <div > 
           
        </div>
      );
    }
      
  }
     
//   export const mapStateToProps = (state) => {
//     return { dogs: state.dogs ,
//              pagination: state.pagination 
//             };
//   };
  
// export const mapDispatchToProps = (dispatch) => {
//     return {
//       getAllDogs: () => dispatch(getAllDogs()),
//       };
//   };
  
  
 // export default connect(mapStateToProps, mapDispatchToProps)(WRITETEMP);
  