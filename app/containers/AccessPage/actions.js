/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, LOGIN, SIGNIN } from "./constants";

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




