/*
 *
 * Login reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION, SET_LOGOUT } from "./constants";

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      
      // case SET_LOGIN:
      //   draft.userData = action.payload;
      case DEFAULT_ACTION:
        break;
    }
  });

export default loginReducer;