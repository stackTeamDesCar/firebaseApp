/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {REGISTRATION} from './constants';
import { push, replace } from 'connected-react-router';

import firebase from 'firebase';
// const db = firebase.database();

function* registerUser({userData}) {

const db = yield firebase.database();

  db.app.auth().createUserWithEmailAndPassword(userData.email, userData.password)
    .then((user) => console.log('us',user))
    // .then(() => put(push('/login')))
    .catch(err => console.log('err',err));
}

export default function* defaultSaga() {
  yield takeLatest(REGISTRATION, registerUser);
}

