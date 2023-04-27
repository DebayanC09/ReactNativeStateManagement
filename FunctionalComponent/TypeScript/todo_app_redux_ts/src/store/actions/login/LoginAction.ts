import {callLogin} from '../../../services/AxiosServices';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../../../App';
import {AnyAction} from 'redux';

export const LOGIN_ACTION = {
  CLEAR_EMAIL_ERROR: 'login/clear_email_error',
  CLEAR_PASSWORD_ERROR: 'login/clear_password_error',
  VALIDATION_ERROR: 'login/validation_error',
  FETCHING: 'login/fetching',
  RESPONSE: 'login/response',
  CLEAR_STATE: 'login/clear_state',
};

export const login = (email: string, password: string) => {
  if (email === '') {
    return {
      type: LOGIN_ACTION.VALIDATION_ERROR,
      payload: {emailError: 'Please enter email', passwordError: ''},
    };
  } else if (password === '') {
    return {
      type: LOGIN_ACTION.VALIDATION_ERROR,
      payload: {emailError: '', passwordError: 'Please enter password'},
    };
  } else {
    return async (dispatch: ThunkDispatch<RootState, any, AnyAction>) => {
      dispatch({type: LOGIN_ACTION.FETCHING});
      const response = await callLogin(email, password);
      dispatch({type: LOGIN_ACTION.RESPONSE, payload: response});
    };
  }
};

export const clearEmailError = () => {
  return {type: LOGIN_ACTION.CLEAR_EMAIL_ERROR};
};

export const clearPasswordError = () => {
  return {type: LOGIN_ACTION.CLEAR_PASSWORD_ERROR};
};

export const clearState = () => {
  return {type: LOGIN_ACTION.CLEAR_STATE};
};
