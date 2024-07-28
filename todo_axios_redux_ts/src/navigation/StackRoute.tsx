import {ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen, {SPLASH_SCREEN} from '../screens/splash/SplashScreen';

const Stack = createNativeStackNavigator<ParamListBase>();
export const StackRoute = () => (
  <Stack.Navigator
    initialRouteName={SPLASH_SCREEN}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} options={{}} />
  </Stack.Navigator>
);
