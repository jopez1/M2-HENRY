import {ADD_CHARACTER, DELETE_CHARACTER} from "./actions/types";



//snipet autocompletado con rxreducer
const initialState = {
    myFavorites: [],
}

export  const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_CHARACTER:
    return { 
         
        ...state, 
        list:[...state.list, payload]
         }
     case DELETE_CHARACTER:
        const listFiltered = state.list.filter(fav => fav.id !== payload);
        return{
            ...state,
            list: listFiltered
        }

  default:
    return state
  }
}

export default rootReducer;