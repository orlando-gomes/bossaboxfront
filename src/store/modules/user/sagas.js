import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import {
  updateUserSuccess,
  updateUserFailure,
} from '~/store/modules/user/actions';

function setHeaderAuthorization() {
  if (!api.defaults.headers.Authorization) {
    const localPersistence = JSON.parse(
      localStorage.getItem('persist:bossaboxfront')
    );
    const persistenceAuth = JSON.parse(localPersistence.auth);
    api.defaults.headers.Authorization = `Bearer ${persistenceAuth.token}`;
  }
}

function* updateUser({ payload }) {
  setHeaderAuthorization();
  try {
    if (payload.newPassword) {
      const { avatarName, name, email, confirmPassword } = payload;
      const oldPassword = payload.password;
      const password = payload.newPassword;

      const response = yield call(api.put, '/users', {
        avatar_name: avatarName,
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      });

      const { user } = response.data;
      yield put(updateUserSuccess(user));
    } else {
      const { avatarName, name, email, password } = payload;

      const response = yield call(api.put, '/users', {
        avatar_name: avatarName,
        name,
        email,
        password,
      });

      const { user } = response.data;
      yield put(updateUserSuccess(user));
    }
  } catch (err) {
    let emailAlreadyExists = false;
    let passwordIsWrong = false;
    let serverIsDown = false;
    let message = '';

    switch (err.message) {
      case 'Request failed with status code 401':
        passwordIsWrong = true;
        message = 'Please check your password.';
        break;
      case 'Request failed with status code 400':
        emailAlreadyExists = true;
        message = 'This email has already been used';
        break;
      case 'Request failed with status code 500':
        serverIsDown = true;
        message = 'Server error. Please try again later';
        break;

      default:
        break;
    }

    yield put(
      updateUserFailure(
        emailAlreadyExists,
        passwordIsWrong,
        serverIsDown,
        message
      )
    );
  }
}

export default all([takeLatest('@user/UPDATE_USER_REQUEST', updateUser)]);
