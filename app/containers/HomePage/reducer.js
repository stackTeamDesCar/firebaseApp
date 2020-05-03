/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {GET_DATA_LIST } from './constants';

// The initial state of the App
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_DATA_LIST:
        draft.pinco = 'pallino';
      break;
    }
  });

export default homeReducer;
