import React from 'react'; 
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../../redux/actions";

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const DogDetail = (props) => {
  const id = props.match.params.id;
  const dDetail =  useSelector(state => state.dogDetail);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDogDetail(id));
  }, []);
    return ( 
        <div>
           <script>{console.log(dDetail)}</script>
           <p>mi id es: {id}</p>
           <p>nombre: {dDetail.name}</p>
           <p>{dDetail.id}</p>
        </div>
    ) 
}

export default DogDetail;
