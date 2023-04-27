import React from 'react';
import SplashScreen, {SPLASH_SCREEN} from '../screens/splash/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen, {LOGIN_SCREEN} from '../screens/login/LoginScreen';
import CustomAppBar from '../components/CustomAppBar';

import SignUpScreen, {SIGNUP_SCREEN} from '../screens/signup/SignUpScreen';
import {DRAWER_STACK, DrawerStack} from './DrawerRoutes';
import AddEditTodoScreen, {
  ADD_EDIT_TODO_SCREEN,
} from '../screens/todo/AddEditTodoScreen';

const Stack = createNativeStackNavigator();
export const StackRoute = () => (
  <Stack.Navigator
    initialRouteName={SPLASH_SCREEN}
    screenOptions={{
      header: props => <CustomAppBar {...props} />,
    }}>
    <Stack.Screen
      name={SPLASH_SCREEN}
      component={SplashScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={LOGIN_SCREEN}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
    <Stack.Screen
      name={DRAWER_STACK}
      component={DrawerStack}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={ADD_EDIT_TODO_SCREEN} component={AddEditTodoScreen} />
  </Stack.Navigator>
);
