import {liveUrl} from './SecretKeys';

const isLive = true;

export function baseUrl() {
  if (isLive) {
    return liveUrl; // set your base url
  } else {
    return 'http://192.168.0.9:5000/';
  }
}

export const Endpoints = {
  userLogin: 'users/login',
  userRegister: 'users/register',
  refreshToken: 'auth/refreshToken',
  addTodo: 'todo/addTodo',
  updateTodo: 'todo/updateTodo',
  deleteTodo: 'todo/deleteTodo',
  todoList: 'todo/todoList',
};
