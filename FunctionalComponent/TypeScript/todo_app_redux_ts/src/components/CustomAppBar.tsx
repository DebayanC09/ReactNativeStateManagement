import * as React from 'react';
import {Appbar} from 'react-native-paper';
import AppColors from '../utils/AppColors';
import {ParamListBase} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack/src/types';

type CustomAppBarProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  options: NativeStackNavigationOptions;
};

export default function CustomAppBar({navigation, options}: CustomAppBarProps) {
  return (
    <Appbar.Header style={{backgroundColor: AppColors.colorWhite}}>
      <Appbar.BackAction
        onPress={(): void => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
}
