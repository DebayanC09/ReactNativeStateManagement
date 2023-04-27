import {AxiosClient} from './AxiosClient';
import {Endpoints} from '../utils/Endpoints';
const FormData = require('form-data');

export const callLogin = async (email, password) => {
  try {
    const response = await AxiosClient.post(Endpoints.userLogin, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    return {status: -1, message: 'Some thing went wrong...'};
  }
};

export const callSignUp = async (name, email, password) => {
  try {
    const response = await AxiosClient.post(Endpoints.userRegister, {
      name: name,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    return {status: -1, message: 'Some thing went wrong...'};
  }
};

export const callTodoList = async () => {
  try {
    const response = await AxiosClient.get(Endpoints.todoList);
    return response.data;
  } catch (error) {
    return {status: -1, message: 'Some thing went wrong...'};
  }
};

export const callDeleteTodo = async id => {
  try {
    const formData = new FormData();
    formData.append('todoId', id);
    const response = await AxiosClient.post(Endpoints.deleteTodo, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    return {status: -1, message: 'Some thing went wrong...'};
  }
};

export const callRefreshToken = async () => {
  try {
    const response = await AxiosClient.get(Endpoints.refreshToken);
    return response.data;
  } catch (error) {
    return {status: -1, message: 'Some thing went wrong...'};
  }
};

export const callAddTodo = async (title, description, dateTime, priority) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('dateTime', dateTime);
    formData.append('priority', priority);

    const response = await AxiosClient.post(Endpoints.addTodo, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {status: -1, message: 'Some thing went wrong...'};
  }
};

export const callUpdateTodo = async (
  todoId,
  title,
  description,
  dateTime,
  priority,
) => {
  try {
    const formData = new FormData();
    formData.append('todoId', todoId);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('dateTime', dateTime);
    formData.append('priority', priority);

    const response = await AxiosClient.post(Endpoints.updateTodo, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {status: -1, message: 'Some thing went wrong...'};
  }
};
