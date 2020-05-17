/*
 *
 * Profile actions
 *
 */

import { DEFAULT_ACTION, EDIT_PHOTO } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function editPhoto(payload) {
  return {
    type: EDIT_PHOTO,
    user: payload
  };
}
