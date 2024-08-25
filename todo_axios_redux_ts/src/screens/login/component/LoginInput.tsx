import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Spacer from '../../../components/Spacer';
import AppColors from '../../../utils/AppColors';
import {LoginInputStyles} from '../styles/LoginInputStyles';

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={LoginInputStyles.view}>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Spacer height={8} />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Spacer height={16} />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        buttonColor={AppColors.colorBlack}>
        LOGIN
      </Button>
    </View>
  );
};

export default LoginInput;
