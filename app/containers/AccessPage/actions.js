/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, LOGIN, SIGNIN, SET_ERROR, SET_ACCESS_MODE, SWITCH_ACCESS_MODE } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function login(payload) {
  return {
    type: LOGIN,
    user: payload
  };
}

export function signIn(payload) {
  return {
    type: SIGNIN,
    userData: payload
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload
  };
}

export function setAccessMode(payload) {
  return {
    type: SET_ACCESS_MODE,
    payload,
  };
}




