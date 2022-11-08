import React, {useState,useEffect, useContext } from 'react'; 
import { useDispatch, useSelector , ReactReduxContext } from "react-redux";
import { getAllDogs, getDogDetail } from "../../redux/actions";


// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

//funcion para usar el store a mi gusto

// function useStore() {
//   const { store } = useContext(ReactReduxContext)
//   const { getState, dispatch, subscribe } = store
//   const [ storeState, setStoreState ] = useState(getState())
  
//   // subscribe only once
//   useEffect(() => subscribe(
//     () => setStoreState(getState())
//   , []))
  
//   return [storeState, dispatch]
// }


const DogDetail2 = (props) => {
  //useStore();
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const dDetail =  useSelector(
    state => state.dogDetail
    );
 
   useEffect(() => {
    dispatch(getDogDetail(id));
   // dispatch(getAllDogs());
     
  },[dispatch,id]) 
  //[dispatch, id]);
  const name=dDetail.name;
  const height=dDetail.height;
    return ( 
        <div>
                        <p>{/*alert(dDetail)*/}</p>
           <p>mi id es: {id}</p>
           <p>nombre: {/*alert('salida'+ dDetail.name)*/}</p>
           <p>height: {dDetail.name}</p>
           <p>weight: {name}</p>
           <p>temperaments: {dDetail.temperament}</p>
        </div>
    ) 
}
export default DogDetail2;
