import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyles} from '../../styles/GlobalStyles';
import AssetPaths from '../../utils/AssetPaths';
import TextButton from '../../components/TextButton';
import {
  clearEmailError,
  clearPasswordError,
  clearState,
  login,
} from '../../store/actions/login/LoginAction';
import OutlinedTextInput from '../../components/OutlinedTextInput';
import ACTION_TYPES from '../../store/ActionTypes';
import ContainedButton from '../../components/ContainedButton';
import AppColors from '../../utils/AppColors';
import {storeUserData} from '../../utils/Funtionality';

import {SIGNUP_SCREEN} from '../signup/SignUpScreen';
import {DRAWER_STACK} from '../../navigation/DrawerRoutes';

export const LOGIN_SCREEN = 'LoginScreen';

const LoginScreen = ({navigation}) => {
  const state = useSelector(rootState => rootState.loginReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(clearState());

    return function cleanup() {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (state.status === ACTION_TYPES.SUCCESS) {
      storeUserData(state.userData).then(_ => {
        ToastAndroid.show(state.message, ToastAndroid.SHORT);
        navigation.replace(DRAWER_STACK);
      });
    } else if (state.status === ACTION_TYPES.ERROR) {
      ToastAndroid.show(state.message, ToastAndroid.SHORT);
    }
  }, [navigation, state.message, state.status, state.userData]);

  function button(status) {
    if (status === ACTION_TYPES.LOADING) {
      return (
        <ActivityIndicator
          animating={true}
          color={AppColors.colorPrimary}
          style={styles.indicator}
        />
      );
    } else {
      return (
        <ContainedButton
          title="Login"
          style={styles.button}
          onPress={() => {
            Keyboard.dismiss();
            dispatch(login(email.trim(), password.trim()));
          }}
        />
      );
    }
  }

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="always">
        <View style={styles.logoOuter}>
          <Image source={AssetPaths.logo} style={styles.logo} />
        </View>
        <OutlinedTextInput
          label="Email"
          value={email}
          errorText={state.emailError}
          onChangeText={value => {
            if (state.emailError !== '') {
              dispatch(clearEmailError());
            }
            setEmail(value);
          }}
        />
        <OutlinedTextInput
          label="Password"
          value={password}
          errorText={state.passwordError}
          onChangeText={value => {
            if (state.passwordError !== '') {
              dispatch(clearPasswordError());
            }
            setPassword(value);
          }}
        />
        {button(state.status)}
        <TextButton
          title="Sign Up"
          onPress={() => {
            navigation.navigate(SIGNUP_SCREEN);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: 24,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoOuter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    paddingTop: 16,
  },
});

export default LoginScreen;
