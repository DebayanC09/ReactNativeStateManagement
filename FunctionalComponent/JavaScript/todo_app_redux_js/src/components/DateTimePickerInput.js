import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import AppColors from '../utils/AppColors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateTimePickerInput = ({
  label,
  value,
  onChangeText,
  errorText = '',
  onDateSelected,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('Hello');
        setDatePickerVisibility(true);
      }}>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          theme={{
            colors: {
              primary: AppColors.colorPrimary,
            },
          }}
          selectionColor={AppColors.colorPrimary}
          error={errorText !== ''}
          label={label}
          value={value}
          onChangeText={onChangeText}
          editable={false}
        />
        {errorText !== '' ? (
          <Text style={styles.errorText}>{errorText}</Text>
        ) : null}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          locale="en_US"
          onConfirm={date => {
            const formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
            onDateSelected(formattedDate);
            setDatePickerVisibility(false);
          }}
          onCancel={() => {
            setDatePickerVisibility(false);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
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

export default DateTimePickerInput;
