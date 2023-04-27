import ACTION_TYPES from '../../ActionTypes';
import {ADD_EDIT_TODO_ACTION} from '../../actions/todo/AddEditTodoAction';

const initialState = {
  status: ACTION_TYPES.IDLE,
  message: '',
  titleError: '',
  descriptionError: '',
  dateTimeError: '',
  priorityError: '',
  todoItem: {},
};

const AddEditTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDIT_TODO_ACTION.VALIDATION_ERROR: {
      return {
        status: ACTION_TYPES.VALIDATION_ERROR,
        titleError: action.payload.titleError,
        descriptionError: action.payload.descriptionError,
        dateTimeError: action.payload.dateTimeError,
        priorityError: action.payload.priorityError,
        message: '',
        todoItem: {},
      };
    }
    case ADD_EDIT_TODO_ACTION.FETCHING: {
      return {
        ...state,
        status: ACTION_TYPES.LOADING,
      };
    }
    case ADD_EDIT_TODO_ACTION.RESPONSE: {
      if (action.payload.statusCode === 200 && action.payload.status === 1) {
        //await storeUserData(action.payload.user)
        return {
          ...initialState,
          status: ACTION_TYPES.SUCCESS,
          message: action.payload.message,
          todoItem: action.payload.data,
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
    case ADD_EDIT_TODO_ACTION.CLEAR_TITLE_ERROR: {
      return {
        ...state,
        titleError: '',
      };
    }
    case ADD_EDIT_TODO_ACTION.CLEAR_DESCRIPTION_ERROR: {
      return {
        ...state,
        descriptionError: '',
      };
    }
    case ADD_EDIT_TODO_ACTION.CLEAR_DATE_TIME_ERROR: {
      return {
        ...state,
        dateTimeError: '',
      };
    }
    case ADD_EDIT_TODO_ACTION.CLEAR_PRIORITY_ERROR: {
      return {
        ...state,
        priorityError: '',
      };
    }
    case ADD_EDIT_TODO_ACTION.CLEAR_STATE: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default AddEditTodoReducer;
