import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import TodoListScreen from '../screens/todo/TodoListScreen';
import {storeUserData} from '../utils/Funtionality';
import {ToastAndroid} from 'react-native';
import {resetStack} from './Navigator';

export type RootDrawerParamList = {
  TodoListScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const SideBar = ({...props}) => {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <DrawerItem
        label="Logout"
        onPress={() => {
          storeUserData(null).then(_ => {
            ToastAndroid.show('Logged Out', ToastAndroid.SHORT);
            resetStack(props.navigation, 'LoginScreen');
          });
        }}
      />
    </DrawerContentScrollView>
  );
};

export const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName={'TodoListScreen'}
    drawerContent={props => <SideBar {...props} />}>
    <Drawer.Screen
      name={'TodoListScreen'}
      component={TodoListScreen}
      options={{title: 'My Todo'}}
    />
  </Drawer.Navigator>
);
