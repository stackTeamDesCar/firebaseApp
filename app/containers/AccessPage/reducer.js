/*
 *
 * Login reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION,SET_ERROR} from "./constants";

export const initialState = {
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const accessPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default accessPageReducer;
