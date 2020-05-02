/*
 *
 * Register actions
 *
 */

import { DEFAULT_ACTION,REGISTRATION } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function registerUser(payload) {
  return {
    type: REGISTRATION,
    userData: payload
  };
}



