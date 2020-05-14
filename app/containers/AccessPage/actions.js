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

export function login(payload) {
  return {
    type: LOGIN,
    user: payload
  };
}



