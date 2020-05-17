/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR, SET_LOGIN, SET_LOGOUT, SET_LOADING, SET_SWITCH_LOGIN,EDIT_PHOTO_URL } from './constants';

// The initial state of the App
export const initialState = {
  userData: {},
  loading: true,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.loading = false;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case SET_LOGIN:
        draft.userData = action.payload;
        break;
      case SET_LOGOUT:
        draft.userData = '';
        break;
      case SET_LOADING:
        draft.loading = action.payload;
        break;
        case EDIT_PHOTO_URL:
          draft.userData.photo = action.payload;
          break;
      

    }
  });

export default appReducer;
