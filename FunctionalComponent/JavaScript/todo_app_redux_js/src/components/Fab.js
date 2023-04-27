import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import AppColors from '../utils/AppColors';

const Fab = ({icon, onPress, style}) => {
  return (
    <FAB
      style={{...styles.fab, ...style}}
      icon={icon}
      color={AppColors.colorWhite}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: AppColors.colorPrimary,
  },
});

export default Fab;
