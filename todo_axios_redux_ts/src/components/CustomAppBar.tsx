import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppColors from '../utils/AppColors';
import {Appbar} from 'react-native-paper';

export type CustomAppBarProps = {
  showBack?: boolean;
  title?: string;
};

const CustomAppBar = ({showBack = false, title = ''}: CustomAppBarProps) => {
  const navigation = useNavigation();

  function backButtonView() {
    if (showBack === true) {
      return (
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      );
    } else {
      return <View style={styles.emptyView} />;
    }
  }

  function titleView() {
    if (title !== '') {
      return <Appbar.Content title={title} />;
    } else {
      return null;
    }
  }

  return (
    <View style={styles.view}>
      {backButtonView()}
      {titleView()}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 60,
    backgroundColor: AppColors.colorWhite,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyView: {
    width: 30,
  },
});

export default CustomAppBar;
