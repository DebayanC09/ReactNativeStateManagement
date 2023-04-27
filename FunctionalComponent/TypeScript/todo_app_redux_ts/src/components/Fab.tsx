import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import AppColors from '../utils/AppColors';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';

type FabProps = {
  icon: IconSource;
  onPress: (event: GestureResponderEvent) => void;
};

const Fab = ({icon, onPress}: FabProps) => {
  return (
    <FAB
      style={{...styles.fab}}
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
