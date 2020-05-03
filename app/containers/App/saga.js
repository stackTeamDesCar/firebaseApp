/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_DATA_LIST } from 'containers/HomePage/constants';
import { AUTO_LOGIN } from 'containers/App/constants';
import { login, setLogin } from 'containers/Login/actions';
import { makeSelectCredentials } from './selectors';

import firebase from 'firebase';
import { replace } from 'connected-react-router';

function* getData() {
  // yield database.ref('/utenti').on('value', function (snapshot) {
  //   console.log(snapshot.val());
  // });
}

function* autoLogin() {
  const auth = yield firebase.auth();
  const database = firebase.database();

  auth.onAuthStateChanged(function (user) {
    if (user) { // Se utente risulta loggato

      //recupero id e lo uso per recuperare i dati da '/users'
      database.ref('/users/' + user.uid).on('value', function (snapshot) {
        put(setLogin(snapshot.val()))
      });
      replace('/');
    } else { // Se utente non risulta loggato
      replace('/login');
    }
  });
}


export default function* defaultSaga() {
  yield takeLatest(GET_DATA_LIST, getData);
  yield takeLatest(AUTO_LOGIN, autoLogin);

}

