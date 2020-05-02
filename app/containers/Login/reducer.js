/*
 *
 * Login reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION,SET_LOGOUT,SET_LOGIN } from "./constants";

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case SET_LOGOUT:
        draft.global.userData = '';
        case SET_LOGIN:
          draft.global.userData = action.payload;
      case DEFAULT_ACTION:
        break;
    }
  });

export default loginReducer;
