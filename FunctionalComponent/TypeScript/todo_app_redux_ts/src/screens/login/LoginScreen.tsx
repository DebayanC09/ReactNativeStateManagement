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
import AssetPaths from '../../utils/AssetPaths';
import TextButton from '../../components/TextButton';
import OutlinedTextInput from '../../components/OutlinedTextInput';
import ACTION_TYPES from '../../store/types/ActionTypes';
import ContainedButton from '../../components/ContainedButton';
import AppColors from '../../utils/AppColors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/StackRoutes';
import {GlobalStyles} from '../../sytles/GlobalStyles';
import {RootState, useAppDispatch, useAppSelector} from '../../../App';
import {
  clearEmailError,
  clearPasswordError,
  clearState,
  login,
} from '../../store/actions/login/LoginAction';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {storeUserData} from '../../utils/Funtionality';
import {LoginState} from '../../store/reducers/login/LoginReducer';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const state: LoginState = useAppSelector(rootState => rootState.loginReducer);
  const dispatch = useAppDispatch() as ThunkDispatch<RootState, any, AnyAction>;

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
        navigation.replace('DrawerStack');
      });
    } else if (state.status === ACTION_TYPES.ERROR) {
      ToastAndroid.show(state.message, ToastAndroid.SHORT);
    }
  }, [navigation, state.message, state.status, state.userData]);

  function button(status: string) {
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
            navigation.navigate('SignUpScreen');
          }}
          style={{}}
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
  indicator: {
    paddingTop: 16,
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
});

export default LoginScreen;
