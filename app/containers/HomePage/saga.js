/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_DATA_LIST } from 'containers/HomePage/constants';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import firebase from 'firebase';

function* getData() {
  const database = firebase.database();
  database.ref('/utenti').on('value', function (snapshot) {
    console.log(snapshot.val());
  });

}


export default function* defaultSaga() {
  yield takeLatest(GET_DATA_LIST, getData);
}

