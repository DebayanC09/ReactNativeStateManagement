import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppColors from '../utils/AppColors';
import {Button} from 'react-native-paper';

const TextButton = ({title, onPress, style}) => {
  return (
    <View style={{...styles.button, ...style}}>
      <Button
        mode="text"
        onPress={onPress}
        labelStyle={{color: AppColors.colorPrimary}}>
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginStart: 16,
    marginEnd: 16,
  },
});

export default TextButton;
