import {callSignUp} from '../../../services/AxiosServices';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../../../App';
import {AnyAction} from 'redux';

export const SIGNUP_ACTION = {
  CLEAR_NAME_ERROR: 'signup/clear_name_error',
  CLEAR_EMAIL_ERROR: 'signup/clear_email_error',
  CLEAR_PASSWORD_ERROR: 'signup/clear_password_error',
  VALIDATION_ERROR: 'signup/validation_error',
  FETCHING: 'signup/fetching',
  RESPONSE: 'signup/response',
  CLEAR_STATE: 'signup/clear_state',
};

export const signUp = (name: string, email: string, password: string) => {
  if (name === '') {
    return {
      type: SIGNUP_ACTION.VALIDATION_ERROR,
      payload: {
        nameError: 'Please enter name',
        emailError: '',
        passwordError: '',
      },
    };
  } else if (email === '') {
    return {
      type: SIGNUP_ACTION.VALIDATION_ERROR,
      payload: {
        nameError: '',
        emailError: 'Please enter email',
        passwordError: '',
      },
    };
  } else if (password === '') {
    return {
      type: SIGNUP_ACTION.VALIDATION_ERROR,
      payload: {
        nameError: '',
        emailError: '',
        passwordError: 'Please enter password',
      },
    };
  } else {
    return async (dispatch: ThunkDispatch<RootState, any, AnyAction>) => {
      dispatch({type: SIGNUP_ACTION.FETCHING});
      const response = await callSignUp(name, email, password);
      dispatch({type: SIGNUP_ACTION.RESPONSE, payload: response});
    };
  }
};
export const clearNameError = () => {
  return {type: SIGNUP_ACTION.CLEAR_NAME_ERROR};
};

export const clearEmailError = () => {
  return {type: SIGNUP_ACTION.CLEAR_EMAIL_ERROR};
};

export const clearPasswordError = () => {
  return {type: SIGNUP_ACTION.CLEAR_PASSWORD_ERROR};
};

export const clearState = () => {
  return {type: SIGNUP_ACTION.CLEAR_STATE};
};
