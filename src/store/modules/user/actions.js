export function updateUserRequest(
  avatarName,
  name,
  email,
  password,
  newPassword,
  confirmPassword
) {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: {
      avatarName,
      name,
      email,
      password,
      newPassword,
      confirmPassword,
    },
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@user/UPDATE_USER_SUCCESS',
    payload: { user },
  };
}

export function updateUserFailure(
  emailAlreadyExists,
  passwordIsWrong,
  serverIsDown,
  message
) {
  return {
    type: '@user/UPDATE_USER_FAILURE',
    payload: { emailAlreadyExists, passwordIsWrong, serverIsDown, message },
  };
}

export function cleanExternalFailures() {
  return {
    type: '@user/CLEAN_EXTERNAL_FAILURES',
  };
}

export function closeBanner() {
  return {
    type: '@user/CLOSE_BANNER',
  };
}
