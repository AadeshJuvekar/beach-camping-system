import { GET_SESSION, LOGIN_USER } from "../actions/types";

const initialState = {
    
};
export default function(state = initialState, action) {
    switch (action.type) {
    case GET_SESSION:
        return action.payload;
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
    }
  }