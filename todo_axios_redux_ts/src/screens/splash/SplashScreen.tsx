import React, {useEffect} from 'react';
import {Text} from 'react-native';

import {RootStackParamList} from '../../navigation/StackRoute';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  });

  return <Text>Splash Screen</Text>;
};

export default SplashScreen;
