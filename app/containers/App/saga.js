/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_DATA_LIST } from 'containers/HomePage/constants';
import { AUTO_LOGIN } from 'containers/App/constants';
import { login } from 'containers/Login/actions';
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

  auth.onAuthStateChanged(function (user) {
    console.log('authstate')
    if (user) { // Se utente risulta loggato
      console.log(user.uid)

      //recupero id e lo uso per recuperare i dati da '/users'
      replace('/');

      

      // const displayName = user.displayName;
      // const email = user.email;
      // const emailVerified = user.emailVerified;
      // const photoURL = user.photoURL;
      // const isAnonymous = user.isAnonymous;
      // const uid = user.uid;
      // const providerData = user.providerData;

      
    } else { // Se utente non risulta loggato
      console.log('utente non loggato')
      replace('/login');

      
      
    }
  });
  // const db = yield firebase.database();

  // const userData = yield select(makeSelectCredentials());
  // yield console.log('userData', userData);
  // try {
  //   if (userData) {
  //     db.app.auth().signInWithEmailAndPassword(userData.email, userData.password)
  //       .then(user => console.log(user))
  //       .catch(err => console.log(err));
  //   } else return;
  // } catch (error) {
  //   yield console.log(error);
}


export default function* defaultSaga() {
  yield takeLatest(GET_DATA_LIST, getData);
  yield takeLatest(AUTO_LOGIN, autoLogin);

}

