import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constants} from './Constants';

export const storeUserData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(Constants.USER_DATA, jsonValue);
  } catch (e) {}
};

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(Constants.USER_DATA);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};
