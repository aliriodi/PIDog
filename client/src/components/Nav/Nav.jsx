import React, { Component } from 'react';
import { NavLink , Route} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
//import {bindActionCreators} from 'redux';
import { movepage } from "../../redux/actions";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Logo from './feet.jpg';
import Filtro from './filter.jpg';

import './Nav.css'
 
export  class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {iddirect:'false'}
      }
  componentDidMount() {
       if(this.state.iddirect==='back'){
         alert('en componentDidMount'+ this.state.iddirect)
      //useDispatch()
        useDispatch(movepage({idPageInit:1,
      idPageMax:22,
      idPageTo:1,
      idPageNow:1,
      idPagei:[1,2,3,4,22],
      iddirect:'back',
       } ))
       

       }
  //  //this.props.movepage(pagination);
  }
 
  render() {
    
            return (
           <div className="general">
              <nav className="navbar-dark" >
                <img id="Alirio" src={Logo} alt='Dogfeet' className="d-inline-block" />           
              <h1 className="navbar-brand">Dogs Skill    <SearchBar    /> </h1>   
             
               <NavLink  className="letter" to="/Home">Home</NavLink> "   "
               <NavLink  className="letter" to="/dogs/create/">Create Dog</NavLink>
               <Route exact path="/Home"  >
               <h3> <p  className="letter2">
               <img id="Alirio" src={Filtro} alt='Dogfeet' className="d-inline-block" /> 
               <button onClick={()=>this.props.dispatch(movepage({idPageInit:1,idPageMax:22,idPageTo:1,
                                     idPageNow:1, idPagei:[1,2,3,4,22],iddirect:'back', }))}>
                {'<== back'}</button>   
               <button onClick= {()=>this.setState({ iddirect: 'back' })}
               > {this.props.pagination.idPagei[0]} </button>  ... 
               <button onClick={()=>movepage({idPageInit:1,
                idPageMax:22,idPageTo:1,idPageNow:1, idPagei:[1,2,3,4,22],iddirect:'null',})}> {this.props.pagination.idPagei[1]} </button> 
               <button onClick={movepage(this.props.pagination.idPagei[2])}> {this.props.pagination.idPagei[2]} </button> 
               <button onClick={movepage(this.props.pagination.idPagei[3])}> {this.props.pagination.idPagei[3]} </button>  ... 
               <button onClick={movepage(this.props.pagination.idPagei[4])}> {this.props.pagination.idPagei[4]} </button>
               <button onClick={movepage(this.props.pagination.iddirect)}>{'NEXT ==>'}</button> 
               </p></h3>
              {alert(this.state.iddirect)}
              {alert(this.props.pagination.iddirect)}
                </Route>
                <p> + + </p>           
              </nav>              
              
               </div>
        )
    }
}

export const mapStateToProps = (state) => {
  return { pagination: state.pagination };
};


export const mapDispatchToProps = (dispatch) => {
  return {
       movepage: value => dispatch(movepage(value))
  };
;} 
//export default connect(mapStateToProps)(Nav);
 export default connect(mapStateToProps, mapDispatchToProps)(Nav);