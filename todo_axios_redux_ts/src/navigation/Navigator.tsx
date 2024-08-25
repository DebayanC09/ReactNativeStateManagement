import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackRoute} from './StackRoute';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Navigator;
