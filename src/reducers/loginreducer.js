import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
 isAuthenticated: null
};

export default function (state = initialState, action) {
 switch (action.type) {
  case LOGIN_SUCCESS:
   return {
    ...state,
    ...action.payload,
    isAuthenticated: true
   };
  case LOGOUT_SUCCESS:
   return {
    ...state,
    ...action.payload,
    isAuthenticated: false
   };
  default:
   return state;
 }
}