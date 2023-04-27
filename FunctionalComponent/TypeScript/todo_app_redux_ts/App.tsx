import React from 'react';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './src/navigation/Navigator';
import LoginReducer from './src/store/reducers/login/LoginReducer';
import {StatusBar} from 'react-native';
import AppColors from './src/utils/AppColors';
import SignUpReducer from './src/store/reducers/signup/SignUpReducer';
import TodoListReducer from './src/store/reducers/todo/TodoListReducer';
import AddEditTodoReducer from './src/store/reducers/todo/AddEditTodoReducer';

const rootReducer = combineReducers({
  loginReducer: LoginReducer,
  signUpReducer: SignUpReducer,
  todoListReducer: TodoListReducer,
  addEditTodoReducer: AddEditTodoReducer,
});
//const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
