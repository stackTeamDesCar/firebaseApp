/**
 * Combine all sagas in this file and export the root saga.
 *
 * DO NOT REMOVE COMMENTS PLACEHOLDER!
 */

import { fork, all } from 'redux-saga/effects';

import HomePageSaga from './containers/HomePage/saga';

/* import placeholder */

export default function* root() {
  const sagas = [
    yield fork(HomePageSaga),
    /* injection placeholder */
  ];
  yield all(sagas);
}
