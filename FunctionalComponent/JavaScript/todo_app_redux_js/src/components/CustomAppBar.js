import * as React from 'react';
import {Appbar} from 'react-native-paper';
import AppColors from '../utils/AppColors';

export default function CustomAppBar({navigation, options}) {
  return (
    <Appbar.Header style={{backgroundColor: AppColors.colorWhite}}>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
}
