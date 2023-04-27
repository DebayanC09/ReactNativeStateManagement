import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from '../screens/signup/SignUpScreen';
import CustomAppBar from '../components/CustomAppBar';
import {DrawerStack} from './DrawerRoutes';
import AddEditTodoScreen from '../screens/todo/AddEditTodoScreen';
import {TodoItemModel} from '../models/TodoItemModel';

export interface AddEditTodoScreenParams {
  type: string;
  data: TodoItemModel | null;
}

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  DrawerStack: undefined;
  AddEditTodoScreen: AddEditTodoScreenParams;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackRoute = () => (
  <Stack.Navigator
    initialRouteName={'SplashScreen'}
    screenOptions={{
      header: (props: NativeStackHeaderProps) => <CustomAppBar {...props} />,
    }}>
    <Stack.Screen
      name={'SplashScreen'}
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={'LoginScreen'}
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
    <Stack.Screen
      name={'DrawerStack'}
      component={DrawerStack}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={'AddEditTodoScreen'} component={AddEditTodoScreen} />
  </Stack.Navigator>
);
