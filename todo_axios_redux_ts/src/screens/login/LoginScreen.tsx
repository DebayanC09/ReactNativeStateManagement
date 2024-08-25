import React from 'react';
import {ScrollView, View} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import {GlobalStyles} from '../../styles/GlobalStyles';
import LoginInput from './component/LoginInput';
import {LoginScreenStyles} from './styles/LoginScreenStyles';

const LoginScreen = () => {
  const view = () => {
    return (
      <ScrollView contentContainerStyle={LoginScreenStyles.scrollView}>
        <LoginInput />
      </ScrollView>
    );
  };

  return (
    <BaseScreen
      showHeader={true}
      appBarProps={{
        showBack: false,
        title: 'Login',
      }}>
      <View style={GlobalStyles.screen}>{view()}</View>
    </BaseScreen>
  );
};

export default LoginScreen;
