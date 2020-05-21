import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./types";
import LoginData from "../data/login";

export const checkUser = (username, password) => dispatch => {
 let checkUser = "";
 let checkPass = "";

 LoginData.map(x => {
  checkUser = x.username;
  checkPass = x.password;
 });

 if (checkUser === username && checkPass === password) {
  dispatch({
   type: LOGIN_SUCCESS
  });
 } else {
  alert("Invalid credentials. Please provide correct details...");
 }
};

export const logout = () => dispatch => {
 dispatch({
  type: LOGOUT_SUCCESS
 });
};
