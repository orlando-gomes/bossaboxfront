export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(user, token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user, token },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signUpSuccess(id, name, email, avatarName) {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
    payload: { id, name, email, avatarName },
  };
}

export function loginFailure(
  emailAlreadyExists,
  dataIsWrong,
  serverIsDown,
  message
) {
  return {
    type: '@auth/SIGN_FAILURE',
    payload: {
      loginError: { emailAlreadyExists, dataIsWrong, serverIsDown, message },
    },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function alreadyAnimated() {
  return {
    type: '@auth/ALREADY_ANIMATED',
  };
}

export function closeBanner() {
  return {
    type: '@auth/CLOSE_BANNER',
  };
}
