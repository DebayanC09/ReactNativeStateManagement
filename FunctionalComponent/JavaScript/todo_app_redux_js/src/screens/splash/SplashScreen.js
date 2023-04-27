import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyles} from '../../styles/GlobalStyles';
import AssetPaths from '../../utils/AssetPaths';
import {LOGIN_SCREEN} from '../login/LoginScreen';
import {getUserData} from '../../utils/Funtionality';
import {DRAWER_STACK} from '../../navigation/DrawerRoutes';

export const SPLASH_SCREEN = 'SplashScreen';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      let userData = await getUserData();
      if (userData != null) {
        console.log(userData);
        navigation.replace(DRAWER_STACK);
      } else {
        navigation.replace(LOGIN_SCREEN);
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
