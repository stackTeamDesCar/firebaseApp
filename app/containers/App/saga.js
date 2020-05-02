/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_DATA_LIST } from 'containers/HomePage/constants';
import { makeSelectCredentials } from './selectors';

// import firebase from 'firebase';
// const database = firebase.database();

function* getData() {
  // yield database.ref('/utenti').on('value', function (snapshot) {
  //   console.log(snapshot.val());
  // });
}

// function* registerUser({ email, password }) {
//  yield db.app.auth().createUserWithEmailAndPassword(email, password)
//     .then(user => console.log(user))
//     .catch(err => console.log(err));
// }


// function* login({ email, password }) {
//   yield db.app.auth().signInWithEmailAndPassword(email, password)
//     .then(user => console.log(user))
//     .catch(err => console.log(err));
// }

// function* autoLogin() {
// // db.app.auth().currentUser.email;

//   const userData = yield select(makeSelectCredentials());
//   yield console.log('usdata', userData);
//   try {
//     if (userData) {
//       yield db.app.auth().signInWithEmailAndPassword(userData.email, userData.password)
//         .then(user => console.log(user))
//         .catch(err => console.log(err));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }


export default function* defaultSaga() {
  yield takeLatest(GET_DATA_LIST, getData);
}

