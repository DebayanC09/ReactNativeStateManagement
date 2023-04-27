import {LOGIN_ACTION} from '../../actions/login/LoginAction';
import ACTION_TYPES from '../../types/ActionTypes';
import {AnyAction} from 'redux';
import {UserModel} from '../../../models/UserModel';

export type LoginState = {
  status: string;
  emailError: string;
  passwordError: string;
  message: string;
  userData: UserModel | null;
};

const initialState: LoginState = {
  status: ACTION_TYPES.IDLE,
  emailError: '',
  passwordError: '',
  message: '',
  userData: null,
};

const LoginReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_ACTION.VALIDATION_ERROR: {
      return {
        status: ACTION_TYPES.VALIDATION_ERROR,
        emailError: action.payload.emailError,
        passwordError: action.payload.passwordError,
        message: '',
        userData: {},
      };
    }
    case LOGIN_ACTION.FETCHING: {
      return {
        ...state,
        status: ACTION_TYPES.LOADING,
      };
    }
    case LOGIN_ACTION.RESPONSE: {
      if (action.payload.statusCode === 200 && action.payload.status === 1) {
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
    case LOGIN_ACTION.CLEAR_EMAIL_ERROR: {
      return {
        ...state,
        emailError: '',
      };
    }
    case LOGIN_ACTION.CLEAR_PASSWORD_ERROR: {
      return {
        ...state,
        passwordError: '',
      };
    }
    case LOGIN_ACTION.CLEAR_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default LoginReducer;
