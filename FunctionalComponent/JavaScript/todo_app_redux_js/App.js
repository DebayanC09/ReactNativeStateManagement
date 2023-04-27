import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './src/navigation/Navigator';
import LoginReducer from './src/store/reducers/login/LoginReducer';
import {createLogger} from 'redux-logger/src';
import SignUpReducer from './src/store/reducers/signup/SignUpReducer';
import TodoListReducer from './src/store/reducers/todo/TodoListReducer';
import AddEditTodoReducer from './src/store/reducers/todo/AddEditTodoReducer';
import {StatusBar} from 'react-native';
import AppColors from './src/utils/AppColors';

const rootReducer = combineReducers({
  loginReducer: LoginReducer,
  signUpReducer: SignUpReducer,
  todoListReducer: TodoListReducer,
  addEditTodoReducer: AddEditTodoReducer,
});
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColors.colorWhite}
      />
      <Navigator />
    </Provider>
  );
};
export default App;
