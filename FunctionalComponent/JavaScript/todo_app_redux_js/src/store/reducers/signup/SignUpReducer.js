import ACTION_TYPES from '../../ActionTypes';
import {SIGNUP_ACTION} from '../../actions/signup/SignUpActions';

const initialState = {
  status: ACTION_TYPES.IDLE,
  nameError: '',
  emailError: '',
  passwordError: '',
  message: '',
  userData: {},
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_ACTION.VALIDATION_ERROR: {
      return {
        status: ACTION_TYPES.VALIDATION_ERROR,
        nameError: action.payload.nameError,
        emailError: action.payload.emailError,
        passwordError: action.payload.passwordError,
        message: '',
        userData: {},
      };
    }
    case SIGNUP_ACTION.FETCHING: {
      return {status: ACTION_TYPES.LOADING};
    }
    case SIGNUP_ACTION.RESPONSE: {
      if (action.payload.statusCode === 201 && action.payload.status === 1) {
        return {
          ...initialState,
          status: ACTION_TYPES.SUCCESS,
          message: action.payload.message,
          userData: action.payload.user,
        };
      } else {
        if (action.payload.message != null) {
          return {
            ...state,
            status: ACTION_TYPES.ERROR,
            message: action.payload.message,
          };
        } else {
          return {
            ...state,
            status: ACTION_TYPES.ERROR,
            message: 'Something went wrong',
          };
        }
      }
    }
    case SIGNUP_ACTION.CLEAR_NAME_ERROR: {
      return {...state, nameError: ''};
    }
    case SIGNUP_ACTION.CLEAR_EMAIL_ERROR: {
      return {...state, emailError: ''};
    }
    case SIGNUP_ACTION.CLEAR_PASSWORD_ERROR: {
      return {...state, passwordError: ''};
    }
    case SIGNUP_ACTION.CLEAR_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default SignUpReducer;
