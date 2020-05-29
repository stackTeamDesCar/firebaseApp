/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { editPhotoUrl } from 'containers/App/actions';
import { setLoading } from 'containers/App/actions';
import { EDIT_PHOTO,EDIT_DATA } from './constants';

import firebase from 'firebase';

function* editPhoto({ user }) {
  yield put(setLoading(true));
  const db = yield firebase.database();
  try {
    yield db.app.storage().ref('avatar/' + user.uid).put(user.photo);
    const url = yield db.app.storage().ref('avatar/' + user.uid).getDownloadURL();
    yield put(editPhotoUrl(url));
    yield db.ref('users/' + user.uid).update({
      photo: url
    });
  }
  catch (error) {
    console.log(error)
  } finally {
    yield put(setLoading(false));
  }
}

function* editData({ user }) {
  const db = yield firebase.database();
  try {
    yield db.ref('users/' + user.id).update({
      name: user.name,
      surname: user.surname,
      city: user.city,
      username: user.username,
    });
  }
  catch (err) {
    console.log(err)
   }
  finally {
    put(setLoading(false));
  }

}

export default function* defaultSaga() {
  yield takeLatest(EDIT_PHOTO, editPhoto);
  yield takeLatest(EDIT_DATA, editData);
}

