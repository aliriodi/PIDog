import React, { Component } from 'react';
import { NavLink , Route} from 'react-router-dom';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import { getAllDogs, movepage } from "../../redux/actions";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Logo from './feet.jpg';
import Filtro from './filter.jpg';
import background from './background.jpg'
import './Nav.css'


export  class Nav extends Component {
  constructor(props) {
    super(props);
    //alert('Escribiendo this.state en el constructor');
    this.state = {  };
    this.Retroceder   = this.Retroceder.bind(this); 
    this.Retornar1 = this.Retornar1.bind(this);
    this.Ira2 = this.Ira2.bind(this);
    this.Ira3 = this.Ira3.bind(this);
    this.Ira4 = this.Ira4.bind(this);
    this.Ultimo22   = this.Ultimo22.bind(this) ;
    this.Avanzar   = this.Avanzar.bind(this) ;
    this.idPageMax = this.idPageMax.bind(this);
    this.ORDEN1 = this.ORDEN1.bind(this);
    this.ORDEN2 = this.ORDEN2.bind(this);
     }

     idPageMax() {return Math.ceil(this.props.dogs.length/8)}
     /** */   
      ORDEN1() {
       this.props.dogs.sort(function(a,b){return a.name.localeCompare(b.name,'en',{numeric:true})});
       //voy a usar la propiedad this.props.pagination.idPageMax para estabelcer el orden
       //idPageMax = 1 ordenar ascendente
       this.props.movepage({idPageInit:1,idPageMax:1,idPageTo:1,
        idPageNow:1,idPagei:[1,2,3,4,this.idPageMax()],iddirect:'Orden Ascendente',})

     } 
     ORDEN2() {
      this.props.dogs.sort(function(b,a){return a.name.localeCompare(b.name,'en',{numeric:true})});
      //voy a usar la propiedad this.props.pagination.idPageMax para estabelcer el orden
      //idPageMax = -1 ordenar DESCENDENTE
      this.props.movepage({idPageInit:1,idPageMax:-1,idPageTo:1,
       idPageNow:1,idPagei:[1,2,3,4,this.idPageMax()],iddirect:'Orden Descendente',})
    } 
    Retornar1() {
      //Llamo la funcion de dispatch de mapDispatchToProps
      //y asigno nuevos valores
      
      this.props.movepage({idPageInit:1,idPageMax:22,idPageTo:1,
                           idPageNow:1,idPagei:[1,2,3,4,this.idPageMax()],iddirect:'',})
       };
    /** */
    Ira2() { 
       if(this.props.pagination.idPagei[1]===2 &&
          this.props.pagination.idPageNow !== 2){
           this.props.movepage({idPageInit:1,idPageMax:22,idPageTo:1,
            idPageNow:2,idPagei:[1,2,3,4,this.idPageMax()],iddirect:'',})}
       else if (this.props.pagination.idPagei[1]>2){
        const idPagei = [];
        const idPageNow = this.props.pagination.idPagei[1];
        idPagei.push(1);
        idPagei.push(this.props.pagination.idPagei[1]-=1);
        idPagei.push(this.props.pagination.idPagei[2]-=1);
        idPagei.push(this.props.pagination.idPagei[3]-=1);
        idPagei.push(this.idPageMax());
        this.props.movepage({idPageInit:1,idPageMax:22,idPageTo:1,
          idPageNow:idPageNow,idPagei:idPagei,iddirect:'',})
       };

         } 
    /** */
    Ira3() { 
         if(this.props.pagination.idPagei[2]!==this.props.pagination.idPageNow){
       const idPagei = [];
       const idPageNow = this.props.pagination.idPagei[2];
       idPagei.push(1);
       idPagei.push(this.props.pagination.idPagei[1]);
       idPagei.push(this.props.pagination.idPagei[2]);
       idPagei.push(this.props.pagination.idPagei[3]);
       idPagei.push(22);
       this.props.movepage({idPageInit:1,idPageMax:22,idPageTo:1,
         idPageNow:idPageNow,idPagei:idPagei,iddirect:'',});
        }
        } 
    /** */
    Ira4() { 
      if((this.props.pagination.idPagei[3]<4 ||
         this.props.pagination.idPagei[3]===this.idPageMax()-1 )&&
         this.props.pagination.idPageNow !== 4){
          this.props.movepage({idPageInit:1,idPageMax:22,idPageTo:1,
           idPageNow:this.props.pagination.idPagei[3],
           idPagei:[1,this.props.pagination.idPagei[1],
                      this.props.pagination.idPagei[2],
                      this.props.pagination.idPagei[3],this.idPageMax()],iddirect:'',})}
      else if (this.props.pagination.idPagei[3]<this.idPageMax()){
       const idPagei = [];
       const idPageNow = this.props.pagination.idPagei[3];
       idPagei.push(1);
       idPagei.push(this.props.pagination.idPagei[1]+=1);
       idPagei.push(this.props.pagination.idPagei[2]+=1);
       idPagei.push(this.props.pagination.idPagei[3]+=1);
       idPagei.push(this.idPageMax());
       this.props.movepage({idPageInit:1,idPageMax:this.idPageMax(),idPageTo:1,
         idPageNow:idPageNow,idPagei:idPagei,iddirect:'',})
      };

        } 
    /** */
    Avanzar() {
       const idPagei =[];
        
      // alert(this.props.pagination.idPagei[3])
        if(this.props.pagination.idPagei[3] < this.idPageMax()-1 &&
           this.props.pagination.idPageNow < this.idPageMax()   &&
           this.props.pagination.idPageNow===this.props.pagination.idPagei[2])
           {
                           idPagei.push(1);
                           idPagei.push(this.props.pagination.idPagei[1]+=1);
                           idPagei.push(this.props.pagination.idPagei[2]+=1);
                           idPagei.push(this.props.pagination.idPagei[3]+=1);
                           idPagei.push(this.idPageMax());
                           const idPageNow = this.props.pagination.idPageNow+1;
                           this.props.movepage({idPageInit:1,idPageMax:this.idPageMax(),idPageTo:1,
                            idPageNow:idPageNow,idPagei:idPagei,iddirect:'',})
                           }
                           else if (this.props.pagination.idPageNow<this.idPageMax()) {
                            const idPageNow = this.props.pagination.idPageNow+1;
                           idPagei.push(1);
                           idPagei.push(this.props.pagination.idPagei[1]);
                           idPagei.push(this.props.pagination.idPagei[2]);
                           idPagei.push(this.props.pagination.idPagei[3]);
                           idPagei.push(this.idPageMax());
                            this.props.movepage({idPageInit:1,idPageMax:this.idPageMax(),idPageTo:1,
                              idPageNow:idPageNow,idPagei:idPagei,iddirect:'',})
                           }
         };
    /** RETROCEDER  */
    Retroceder() {
      const idPagei =[];
       
     // alert(this.props.pagination.idPagei[3])
       if(this.props.pagination.idPagei[2] > 2 &&
          this.props.pagination.idPageNow > 3   &&
          this.props.pagination.idPageNow===this.props.pagination.idPagei[2])
          {
                          idPagei.push(1);
                          idPagei.push(this.props.pagination.idPagei[1]-=1);
                          idPagei.push(this.props.pagination.idPagei[2]-=1);
                          idPagei.push(this.props.pagination.idPagei[3]-=1);
                          idPagei.push(this.idPageMax());
                          const idPageNow = this.props.pagination.idPageNow-1;
                          this.props.movepage({idPageInit:1,idPageMax:this.idPageMax(),idPageTo:1,
                           idPageNow:idPageNow,idPagei:idPagei,iddirect:'',})
                          }
                          else if (this.props.pagination.idPageNow>1) {
                           const idPageNow = this.props.pagination.idPageNow-1;
                          idPagei.push(1);
                          idPagei.push(this.props.pagination.idPagei[1]);
                          idPagei.push(this.props.pagination.idPagei[2]);
                          idPagei.push(this.props.pagination.idPagei[3]);
                          idPagei.push(this.idPageMax());
                           this.props.movepage({idPageInit:1,idPageMax:this.idPageMax(),idPageTo:1,
                             idPageNow:idPageNow,idPagei:idPagei,iddirect:'',})
                          }
              };
       /**Ultimo22 */
       Ultimo22() {
        //Llamo la funcion de dispatch de mapDispatchToProps
        //y asigno nuevos valores
        this.props.movepage({idPageInit:1,idPageMax:this.idPageMax(),idPageTo:1,
                             idPageNow:this.idPageMax(),idPagei:[1,this.idPageMax()-3,this.idPageMax()-2,this.idPageMax()-1,this.idPageMax()],iddirect:'',})
         };
         /** */

    componentDidMount() {
      //Funciones a Ejecutar despues de la 1era renderizacion
    }

    componentDidUpdate(){
      //funciones a Ejecutar acciones despues de la renderizacion del componente
      //2da renderizacion
    }
     

  render() {
   // alert(this.props.pagination.idPageNow)
    // alert('inicial'+this.state.idPageInit)
    
    // this.setState(this.state.idPageInit+=1);
    // alert('modificado '+this.state.idPageInit);

            return (
             
           <div className="general-container">
            { this.setState = this.setState.bind(this)}
              <nav className="navbar-dark" >
                <img className="box1" id="Alirio" src={Logo} alt='Dogfeet'  />           
              <div className="box1-item">Dogs Skill    <SearchBar    /> </div>   
             <div className="box1-item">
               <NavLink  className="letter" to="/Home">Home</NavLink> "   "
               <NavLink  className="letter" to="/dogs/create/">Create Dog</NavLink>
               </div> 
               <div className="box1-item">
               <Route exact path="/Home"  >
              
               <img id="Alirio" src={Filtro} alt='Dogfeet' className="d-inline-block" /> 
               <button className="pageid" onClick={()=>this.Retroceder()}> {'<== BACK'}</button>   
               <button  className={(this.props.pagination.idPagei[0]===this.props.pagination.idPageNow)?"pageidNow":"pageid"}  onClick= {()=>this.Retornar1()}> {this.props.pagination.idPagei[0]} </button>  ... 
               <button  className={(this.props.pagination.idPagei[1]===this.props.pagination.idPageNow)?"pageidNow":"pageid"}  onClick={()=>this.Ira2()}>       {this.props.pagination.idPagei[1]} </button> 
               <button className={(this.props.pagination.idPagei[2]===this.props.pagination.idPageNow)?"pageidNow":"pageid"}  onClick={()=>this.Ira3()}>       {this.props.pagination.idPagei[2]} </button> 
               <button className={(this.props.pagination.idPagei[3]===this.props.pagination.idPageNow)?"pageidNow":"pageid"}  onClick={()=>this.Ira4()}>       {this.props.pagination.idPagei[3]} </button>  ... 
               <button  className={(this.props.pagination.idPagei[4]===this.props.pagination.idPageNow)?"pageidNow":"pageid"} onClick={()=>this.Ultimo22()}>   {this.idPageMax()} </button>
               <button  className="pageid"  onClick={()=>this.Avanzar()}>    {'NEXT ==>'}</button> 
               {'   ............      '}
               <button  className="pageid"  onClick={()=>this.ORDEN1()}>    {'ASCENDENTE'}</button> 
               <button  className="pageid"  onClick={()=>this.ORDEN2()}>    {'DESCENDENTE'}</button> 
             <p></p>
               </Route>
               </div>
              </nav>              
              <p  background-image= {'./backgropund.jpg'}>  </p>
              <div style={{ backgroundImage: `url(${background})` }}>
       </div>
               </div>
        )
    }
}

export const mapStateToProps = (state) => {
  return { pagination: state.pagination ,
           dogs: state.dogs};
};


export const mapDispatchToProps = (dispatch) => {
  return {
       movepage: pagination => dispatch(movepage(pagination)),
       getAllDogs:     () => dispatch(getAllDogs())
  };
}; 
//export default connect(mapStateToProps)(Nav);
 export default connect(mapStateToProps, mapDispatchToProps)(Nav);