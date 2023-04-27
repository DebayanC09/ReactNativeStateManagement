import {callDeleteTodo, callTodoList} from '../../../services/AxiosServices';

export const TODO_LIST_ACTION = {
  FETCHING: 'todoList/fetching',
  RESPONSE: 'todoList/response',
  UPDATE_LIST: 'todoList/update_list',
  DELETE_RESPONSE: 'todoList/delete_response',
  CLEAR_STATE: 'todoList/clear_state',
};

export const fetchTodoList = () => {
  return async dispatch => {
    dispatch({type: TODO_LIST_ACTION.FETCHING});
    const response = await callTodoList();
    dispatch({type: TODO_LIST_ACTION.RESPONSE, payload: response});
  };
};

export const updateTodoList = (type, todoItem) => {
  return {
    type: TODO_LIST_ACTION.UPDATE_LIST,
    payload: {type: type, data: todoItem},
  };
};

export const deleteTodo = item => {
  return async dispatch => {
    dispatch({type: TODO_LIST_ACTION.FETCHING});
    const response = await callDeleteTodo(item._id);
    dispatch({
      type: TODO_LIST_ACTION.DELETE_RESPONSE,
      payload: response,
      todoItem: item,
    });
  };
};
