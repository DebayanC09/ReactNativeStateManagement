import React from 'react';
import {
  CommonActions,
  NavigationContainer,
  ParamListBase,
} from '@react-navigation/native';
import {StackRoute} from './StackRoutes';
import {DrawerNavigationProp} from '@react-navigation/drawer/src/types';

export const resetStack = (
  navigation: DrawerNavigationProp<ParamListBase>,
  screen: string,
) => {
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
