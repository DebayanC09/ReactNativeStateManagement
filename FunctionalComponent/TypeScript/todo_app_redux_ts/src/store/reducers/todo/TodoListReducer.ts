import ACTION_TYPES from '../../types/ActionTypes';
import {Constants} from '../../../utils/Constants';
import {TODO_LIST_ACTION} from '../../actions/todo/TodoListAction';
import {TodoItemModel} from '../../../models/TodoItemModel';
import {AnyAction} from 'redux';

export type TodoListState = {
  status: string;
  message: string;
  todoList: Array<TodoItemModel>;
  todoItem: TodoItemModel | null;
  type: string | null;
};

const initialState: TodoListState = {
  status: ACTION_TYPES.IDLE,
  message: '',
  todoList: [],
  todoItem: null,
  type: null,
};

const TodoListReducer = (
  state: TodoListState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case TODO_LIST_ACTION.FETCHING: {
      return {
        ...state,
        status: ACTION_TYPES.LOADING,
      };
    }
    case TODO_LIST_ACTION.RESPONSE: {
      if (action.payload.statusCode === 200 && action.payload.status === 1) {
        return {
          ...initialState,
          status: ACTION_TYPES.SUCCESS,
          message: action.payload.message,
          todoList: action.payload.data,
          type: Constants.LIST,
          todoItem: null,
        };
      } else {
        if (action.payload.message != null) {
          return {
            ...state,
            status: ACTION_TYPES.ERROR,
            message: action.payload.message,
            todoItem: null,
            type: Constants.LIST,
          };
        } else {
          return {
            ...state,
            status: ACTION_TYPES.ERROR,
            message: 'Something went wrong',
            todoItem: null,
            type: Constants.LIST,
          };
        }
      }
    }
    case TODO_LIST_ACTION.UPDATE_LIST: {
      if (action.payload.type === Constants.ADD) {
        return {
          ...state,
          todoList: [...state.todoList, action.payload.data],
          type: Constants.LIST,
          todoItem: null,
        };
      } else if (action.payload.type === Constants.DELETE) {
        const todoList = state.todoList.filter(
          item => item._id !== action.payload.data._id,
        );
        return {
          ...state,
          todoList: todoList,
          type: Constants.LIST,
          todoItem: null,
        };
      } else if (action.payload.type === Constants.UPDATE) {
        const todoList = state.todoList.map((item, _) => {
          if (item._id === action.payload.data._id) {
            return {
              ...item,
              title: action.payload.data.title,
              description: action.payload.data.description,
              dateTime: action.payload.data.dateTime,
              priority: action.payload.data.priority,
            };
          }
          return item;
        });
        return {
          ...state,
          todoList: todoList,
          type: Constants.LIST,
          todoItem: null,
        };
      } else {
        return {...state};
      }
    }
    case TODO_LIST_ACTION.DELETE_RESPONSE: {
      if (action.payload.statusCode === 200 && action.payload.status === 1) {
        return {
          ...state,
          status: ACTION_TYPES.SUCCESS,
          message: action.payload.message,
          type: Constants.DELETE,
          todoItem: action.todoItem,
        };
      } else {
        if (action.payload.message != null) {
          return {
            ...state,
            status: ACTION_TYPES.ERROR,
            message: action.payload.message,
            type: Constants.DELETE,
            todoItem: null,
          };
        } else {
          return {
            ...state,
            status: ACTION_TYPES.ERROR,
            message: 'Something went wrong',
            type: Constants.DELETE,
            todoItem: null,
          };
        }
      }
    }
    default:
      return state;
  }
};

export default TodoListReducer;
