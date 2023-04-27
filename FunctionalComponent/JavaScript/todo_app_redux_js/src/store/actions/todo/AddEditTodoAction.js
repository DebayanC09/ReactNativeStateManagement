import {callAddTodo, callUpdateTodo} from '../../../services/AxiosServices';

export const ADD_EDIT_TODO_ACTION = {
  CLEAR_TITLE_ERROR: 'addEditTodo/clear_tile_error',
  CLEAR_DESCRIPTION_ERROR: 'addEditTodo/clear_description_error',
  CLEAR_DATE_TIME_ERROR: 'addEditTodo/clear_datetime_error',
  CLEAR_PRIORITY_ERROR: 'addEditTodo/clear_priority_error',
  VALIDATION_ERROR: 'addEditTodo/validation_error',
  FETCHING: 'addEditTodo/fetching',
  RESPONSE: 'addEditTodo/response',
  CLEAR_STATE: 'addEditTodo/clear_state',
};

export const addTodo = (title, description, dateTime, priority) => {
  let titleError = '';
  let descriptionError = '';
  let dateTimeError = '';
  let priorityError = '';
  let validationError = false;

  if (title === '') {
    titleError = 'Please enter title';
    validationError = true;
  }
  if (description === '') {
    descriptionError = 'Please enter description';
    validationError = true;
  }
  if (dateTime === '') {
    dateTimeError = 'Please enter date time';
    validationError = true;
  }
  if (priority === '') {
    priorityError = 'Please select priority';
    validationError = true;
  }

  if (validationError) {
    return {
      type: ADD_EDIT_TODO_ACTION.VALIDATION_ERROR,
      payload: {
        titleError: titleError,
        descriptionError: descriptionError,
        dateTimeError: dateTimeError,
        priorityError: priorityError,
      },
    };
  } else {
    return async dispatch => {
      dispatch({type: ADD_EDIT_TODO_ACTION.FETCHING});
      const response = await callAddTodo(
        title,
        description,
        dateTime,
        priority,
      );
      dispatch({type: ADD_EDIT_TODO_ACTION.RESPONSE, payload: response});
    };
  }
};

export const updateTodo = (todoId, title, description, dateTime, priority) => {
  let titleError = '';
  let descriptionError = '';
  let dateTimeError = '';
  let priorityError = '';
  let validationError = false;

  if (title === '') {
    titleError = 'Please enter title';
    validationError = true;
  }
  if (description === '') {
    descriptionError = 'Please enter description';
    validationError = true;
  }
  if (dateTime === '') {
    dateTimeError = 'Please enter date time';
    validationError = true;
  }
  if (priority === '') {
    priorityError = 'Please select priority';
    validationError = true;
  }

  if (validationError) {
    return {
      type: ADD_EDIT_TODO_ACTION.VALIDATION_ERROR,
      payload: {
        titleError: titleError,
        descriptionError: descriptionError,
        dateTimeError: dateTimeError,
        priorityError: priorityError,
      },
    };
  } else {
    return async dispatch => {
      dispatch({type: ADD_EDIT_TODO_ACTION.FETCHING});
      const response = await callUpdateTodo(
        todoId,
        title,
        description,
        dateTime,
        priority,
      );
      dispatch({type: ADD_EDIT_TODO_ACTION.RESPONSE, payload: response});
    };
  }
};

export const clearTitleError = () => {
  return {type: ADD_EDIT_TODO_ACTION.CLEAR_TITLE_ERROR};
};

export const clearDescriptionError = () => {
  return {type: ADD_EDIT_TODO_ACTION.CLEAR_DESCRIPTION_ERROR};
};

export const clearDateTimeError = () => {
  return {type: ADD_EDIT_TODO_ACTION.CLEAR_DATE_TIME_ERROR};
};

export const clearPriorityError = () => {
  return {type: ADD_EDIT_TODO_ACTION.CLEAR_PRIORITY_ERROR};
};

export const clearState = () => {
  return {type: ADD_EDIT_TODO_ACTION.CLEAR_STATE};
};
