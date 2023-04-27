import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constants} from './Constants';
import {UserModel} from '../models/UserModel';

export const storeUserData = async (value: UserModel | null): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(value);
    await AsyncStorage.setItem(Constants.USER_DATA, jsonValue);
  } catch (e) {}
};

export const getUserData = async (): Promise<UserModel | null> => {
  try {
    const jsonValue: string | null = await AsyncStorage.getItem(
      Constants.USER_DATA,
    );
    return jsonValue != null ? (JSON.parse(jsonValue) as UserModel) : null;
  } catch (e) {
    return null;
  }
};
