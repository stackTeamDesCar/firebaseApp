/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, } from 'containers/App/constants';
import { GET_DATA_LIST } from 'containers/HomePage/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import firebase from 'firebase';

// const database = firebase.database();
// const data = database.ref('utenti');
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // yield console.log('oooo')
  // // Select username from store
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  // try {
  //   // Call our request helper (see 'utils/request')
  //   const repos = yield call(request, requestURL);
  //   yield put(reposLoaded(repos, username));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }
}

function* getData() {
  const database = firebase.database();
  database.ref('/utenti').on('value', function (snapshot) {
    console.log(snapshot.val());
  });


}

/**
 * Root saga manages watcher lifecycle
 */
// export default function* homeSaga() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(GET_DATA_LIST, getData);
//   yield takeLatest(LOAD_REPOS, getRepos);
// }
export default function* defaultSaga() {
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(GET_DATA_LIST, getData);
}

