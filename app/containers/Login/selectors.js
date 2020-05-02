import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;
const selectGlobal = state => state.global || initialState;


/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate
  );

  const makeSelectCredentials = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData,
  );


export default makeSelectLogin;
export { selectLoginDomain,makeSelectCredentials };
