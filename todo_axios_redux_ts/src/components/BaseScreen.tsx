import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CustomAppBar, {CustomAppBarProps} from './CustomAppBar';
import AppColors from '../utils/AppColors';
import {GlobalStyles} from '../styles/GlobalStyles';

type BaseScreenProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  appBarProps?: CustomAppBarProps;
};

const BaseScreen = ({
  children,
  showHeader = false,
  appBarProps,
}: BaseScreenProps) => {
  const headerView = () => {
    if (showHeader) {
      return (
        <CustomAppBar
          showBack={appBarProps?.showBack}
          title={appBarProps?.title}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColors.colorWhite}
      />
      {headerView()}
      {children}
    </SafeAreaView>
  );
};

export default BaseScreen;
