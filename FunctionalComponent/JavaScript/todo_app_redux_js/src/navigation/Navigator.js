import React from 'react';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {StackRoute} from './StackRoutes';

export const resetStack = (navigation, screen) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: screen}],
    }),
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Navigator;
