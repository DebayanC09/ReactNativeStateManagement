import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AppColors from '../utils/AppColors';

const ContainedButton = ({title, onPress, style}) => {
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
