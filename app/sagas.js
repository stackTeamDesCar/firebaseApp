/**
 * Combine all sagas in this file and export the root saga.
 *
 * DO NOT REMOVE COMMENTS PLACEHOLDER!
 */

import { fork, all } from 'redux-saga/effects';

import AppSaga from './containers/App/saga';
import HomePageSaga from './containers/HomePage/saga';
import AccessPageSaga from './containers/AccessPage/saga';

/* import placeholder */

export default function* root() {
  const sagas = [
    yield fork(AppSaga),
    yield fork(HomePageSaga),
    yield fork(AccessPageSaga),
    /* injection placeholder */
  ];
  yield all(sagas);
}
