// Importa las action types acá
import {  GET_ALL_DOGS, GET_DOG_DETAIL,  CREATE_DOG, DELETE_PRODUCT } from "../actions";

const initialState = {
  dogs: [],
  dogDetail: {},
  dog:[]
};

const rootReducer = (state = initialState, action) => {
  switch (
    action.type
    //Acá va tu código:
    ) {
      case GET_ALL_DOGS:
      return { ...state,
        dogs: action.payload, //solo actualizo esta prop}  
  };
     case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload, //solo actualizo esta prop
      }
      case CREATE_DOG:
      return {
        ...state,
        dog: state.products.concat(action.payload), //solo actualizo esta prop
      };
      case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
    }
};

export default rootReducer;
