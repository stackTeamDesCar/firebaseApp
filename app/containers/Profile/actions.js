/*
 *
 * Profile actions
 *
 */

import { DEFAULT_ACTION, EDIT_PHOTO, EDIT_DATA } from "./constants";

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
export function editData(payload) {
  return {
    type: EDIT_DATA,
    user: payload
  };
}