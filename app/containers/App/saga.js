/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { GET_DATA_LIST } from 'containers/HomePage/constants';
import { AUTO_LOGIN,SET_LOGOUT } from 'containers/App/constants';
import { login } from 'containers/Login/actions';
import { setLogin } from './actions';
import { makeSelectCredentials } from './selectors';
import { eventChannel } from 'redux-saga'
import firebase from 'firebase';
import { replace } from 'connected-react-router';

function* getData() {
  // yield database.ref('/utenti').on('value', function (snapshot) {
  //   console.log(snapshot.val());
  // });
}

// function* autoLogin() {
//   console.log('autologin')
//   const auth = yield firebase.auth();
//   const database = firebase.database();

//   auth.onAuthStateChanged(function (user) {
//     if (user) { // Se utente risulta loggato

//       //recupero id e lo uso per recuperare i dati da '/users'
//       database.ref('/users/' + user.uid).on('value', function (snapshot) {
//         const user = snapshot.val();
//         put(setLogin(user));
//       });
//       replace('/');
//     } else { // Se utente non risulta loggato
//       replace('/login');
//     }
//   });

// }

function* autoLogin() {
  const auth = yield firebase.auth();
  const database = firebase.database();

  const getId = new eventChannel(emiter => {
    const listener1 = auth.onAuthStateChanged(function (user) {
      if(user){
        emiter({ id: user.uid || '' });
      }else{
        emiter({id:null})
      }
    });

    return () => {
      listener1.off();
    };
  });


  const { id } = yield take(getId);
  console.log(id)

  
  if(!id){yield put(replace('/login'));} //se l'utente non è loggato reindirizzo al login


  const getData = new eventChannel(emiter => {
    const listener2 = database.ref('/users/' + id).on('value', function (snapshot) {
      emiter({ data: snapshot.val() || {} });
    });

    return () => {
      listener2.off();
    };
  });

  while (true) {
    const { data } = yield take(getData);
    yield put(setLogin(data));
  }
}

function* logout() {
  const db = yield firebase.database();
  console.log('sagalogout')
  try {
    yield db.app.auth().signOut();
    yield put(replace('/login'));
  } catch (error) {
  }
}


export default function* defaultSaga() {
  yield takeLatest(GET_DATA_LIST, getData);
  yield takeLatest(AUTO_LOGIN, autoLogin);
  yield takeLatest(SET_LOGOUT, logout);


}

