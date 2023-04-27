import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import AppColors from '../utils/AppColors';
import {TextInputLabelProp} from 'react-native-paper/lib/typescript/src/components/TextInput/types';

type OutlinedTextInputProps = {
  label: TextInputLabelProp;
  value: string;
  onChangeText: (text: string) => void;
  errorText: String;
};

const OutlinedTextInput = ({
  label,
  value,
  onChangeText,
  errorText = '',
}: OutlinedTextInputProps) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        mode="outlined"
        theme={{
          colors: {
            primary: AppColors.colorPrimary,
            //underlineColor: AppColors.colorTransparent
          },
        }}
        selectionColor={AppColors.colorPrimary}
        error={errorText !== ''}
        label={label}
        value={value}
        onChangeText={onChangeText}
      />
      {errorText !== '' ? (
        <Text style={styles.errorText}>{errorText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 8,
    marginStart: 16,
    marginEnd: 16,
  },
  errorText: {
    marginStart: 8,
    color: AppColors.colorError,
  },
});

export default OutlinedTextInput;
