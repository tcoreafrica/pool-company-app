import { ADD_USER, DELETE_USER } from "../actionTypes";

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const user  = action.payload;
 
      return {
     user ,
      };
    }
    case DELETE_USER: {
      return {
        user: {},
      };
    }
    default:
      return state;
  }
}
