import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signedIn: false,
  loading: false,
  afterLogin: false,
  loginError: {
    emailAlreadyExists: false,
    dataIsWrong: false,
    serverIsDown: false,
    message: '',
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;

      case '@auth/SIGN_IN_SUCCESS':
        draft.loading = false;
        draft.signedIn = true;
        draft.afterLogin = true;
        draft.token = action.payload.token;
        draft.loginError = {
          emailAlreadyExists: false,
          dataIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      case '@auth/SIGN_FAILURE':
        draft.loading = false;
        draft.loginFailure = true;
        draft.loginError = action.payload.loginError;
        console.tron.log(draft.loginError);
        break;

      case '@auth/SIGN_OUT':
        draft.token = null;
        draft.signedIn = false;
        draft.afterLogin = false;
        draft.loginError = {
          emailAlreadyExists: false,
          dataIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      case '@auth/SIGN_UP_REQUEST':
        draft.loading = true;
        break;

      case '@auth/SIGN_UP_SUCCESS':
        draft.loading = false;
        draft.loginError = {
          emailAlreadyExists: false,
          dataIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      case '@auth/ALREADY_ANIMATED':
        draft.afterLogin = false;
        break;

      case '@auth/CLOSE_BANNER':
        draft.loginError = {
          emailAlreadyExists: false,
          dataIsWrong: false,
          serverIsDown: false,
          message: '',
        };
        break;

      default:
    }
  });
}
