import {Image, StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../sytles/GlobalStyles';
import React, {useEffect} from 'react';
import AssetPaths from '../../utils/AssetPaths';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/StackRoutes';
import {getUserData} from '../../utils/Funtionality';

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect((): void => {
    setTimeout(async (): Promise<void> => {
      let userData = await getUserData();
      if (userData != null) {
        navigation.replace('DrawerStack');
      } else {
        navigation.replace('LoginScreen');
      }
    }, 1000);
  }, [navigation]);

  return (
    <View style={GlobalStyles.centerItem}>
      <Image source={AssetPaths.logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;
