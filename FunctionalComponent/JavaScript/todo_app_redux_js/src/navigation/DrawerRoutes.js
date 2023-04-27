import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import TodoListScreen, {TODOLIST_SCREEN} from '../screens/todo/TodoListScreen';
import {resetStack} from './Navigator';
import {LOGIN_SCREEN} from '../screens/login/LoginScreen';
import {storeUserData} from '../utils/Funtionality';
import {ToastAndroid} from 'react-native';

export const DRAWER_STACK = 'DrawerStack';

const Drawer = createDrawerNavigator();

const SideBar = ({...props}) => {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <DrawerItem
        label="Logout"
        onPress={() => {
          storeUserData(null).then(_ => {
            ToastAndroid.show('Logged Out', ToastAndroid.SHORT);
            resetStack(props.navigation, LOGIN_SCREEN);
          });
        }}
      />
    </DrawerContentScrollView>
  );
};

export const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName={TODOLIST_SCREEN}
    drawerContent={props => <SideBar {...props} />}>
    <Drawer.Screen
      name={TODOLIST_SCREEN}
      component={TodoListScreen}
      options={{title: 'My Todo'}}
    />
  </Drawer.Navigator>
);
