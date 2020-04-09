/**
 * Created by MuraliTharan on 4/4/2020.
 */


import * as actions from "../../Config/Constants/constants";


//  Login Action //

export function login(userName,Password) {
  return {
    type: actions.ACTION_LOGIN,
    userName: userName,
    password:Password
  };
}

export function setLoginError(error) {
  return {
    type: actions.ACTION_LOGIN_ERROR,
    error: error
  };
}


export function setLoginSuccess(list) {
  return {
    type: actions.ACTION_LOGIN_SUCCESS,
    list: list
  };
}
