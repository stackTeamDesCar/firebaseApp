/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, SET_LOGOUT, LOGIN, SET_LOGIN } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

// export function setLogout() {
//   return {
//     type: SET_LOGOUT
//   };
// }

export function login(payload) {
  return {
    type: LOGIN,
    user: payload
  };
}


// export function setLogin(payload) {
//   return {
//     type: SET_LOGIN,
//     payload
//   };
// }
