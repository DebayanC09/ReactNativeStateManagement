import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import AppColors from '../utils/AppColors';
import {BottomSheet} from 'react-native-btr';

const BottomSheetInput = ({
  list,
  label,
  value,
  onChangeText,
  errorText = '',
  onItemSelected,
}) => {
  const [showSheet, setShowSheet] = useState(false);

  function toggleBottomSheet() {
    setShowSheet(showSheet => !showSheet);
  }

  const renderBottomSheetItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() => {
        toggleBottomSheet();
        onItemSelected(item.title);
      }}>
      <View>
        <Text style={styles.listItem}>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        toggleBottomSheet();
      }}>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          theme={{
            colors: {
              primary: AppColors.colorPrimary,
              underlineColor: AppColors.colorTransparent,
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
        <BottomSheet
          visible={showSheet}
          onBackButtonPress={toggleBottomSheet}
          onBackdropPress={toggleBottomSheet}>
          <FlatList
            style={styles.list}
            keyExtractor={(item, _) => item.id}
            data={list}
            renderItem={renderBottomSheetItem}
          />
        </BottomSheet>
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
  list: {
    paddingVertical: 16,
    backgroundColor: AppColors.colorWhite,
    flexGrow: 0,
  },
  listItem: {
    paddingHorizontal: 16,
    paddingTop: 16,
    color: AppColors.colorBlack,
  },
});

export default BottomSheetInput;
