import {StyleSheet} from 'react-native';
import AppColors from '../utils/AppColors';

export const GlobalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.colorWhite,
  },
  centerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.colorWhite,
  },
  button: {
    marginTop: 16,
  },
});
