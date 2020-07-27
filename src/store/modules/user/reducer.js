import produce from 'immer';

const INITIAL_STATE = {
  userProfile: {},
  loading: false,
  updateSuccess: false,
  updateError: {
    emailAlreadyExists: false,
    passwordIsWrong: false,
    serverIsDown: false,
    message: '',
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        draft.userProfile = action.payload.user;
        break;

      case '@auth/SIGN_OUT':
        draft.userProfile = {};
        break;

      case '@user/UPDATE_USER_REQUEST':
        draft.loading = true;
        draft.updateError = {
          emailAlreadyExists: false,
          passwordIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      case '@user/UPDATE_USER_SUCCESS':
        draft.userProfile = action.payload.user;
        draft.loading = false;
        draft.updateSuccess = true;
        draft.updateError = {
          emailAlreadyExists: false,
          passwordIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      case '@user/UPDATE_USER_FAILURE':
        draft.loading = false;
        draft.updateError = action.payload;
        break;

      case '@user/CLEAN_EXTERNAL_FAILURES':
        draft.updateError = {
          emailAlreadyExists: false,
          passwordIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      case '@user/CLOSE_BANNER':
        draft.updateSuccess = false;
        draft.updateError = {
          emailAlreadyExists: false,
          passwordIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      default:
        break;
    }
  });
}
