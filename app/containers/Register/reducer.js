/*
 *
 * Register reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION, REGISTRATION_SUCCESS } from "./constants";

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state,draft => {
    switch (action.type) {
      // case REGISTRATION_SUCCESS:
      //   console.log(draft)
      //   draft.successRegistration = action.payload;
      case DEFAULT_ACTION:
        break;
    }
  });

export default registerReducer;
