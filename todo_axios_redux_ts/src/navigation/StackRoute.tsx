import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
