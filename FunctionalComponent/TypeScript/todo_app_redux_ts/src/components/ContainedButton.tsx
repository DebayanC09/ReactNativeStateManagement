import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AppColors from '../utils/AppColors';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

type ContainedButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style: any;
};

const ContainedButton = ({title, onPress, style}: ContainedButtonProps) => {
  return (
    <View style={{...styles.button, ...style}}>
      <Button title={title} onPress={onPress} color={AppColors.colorPrimary} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginStart: 16,
    marginEnd: 16,
  },
});

export default ContainedButton;
