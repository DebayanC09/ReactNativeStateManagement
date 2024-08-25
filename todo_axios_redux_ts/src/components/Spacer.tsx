import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import {DimensionValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface SpacerProps {
  width?: DimensionValue;
  height?: DimensionValue;
}

const Spacer: React.FC<SpacerProps> = ({width = 0, height = 0}) => {
  const spacerStyle: ViewStyle = {
    width: width,
    height,
  };

  return <View style={[styles.spacer, spacerStyle]} />;
};

const styles = StyleSheet.create({
  spacer: {
    // Additional styles if needed
  },
});

export default Spacer;
