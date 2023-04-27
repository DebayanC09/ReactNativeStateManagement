import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {GlobalStyles} from '../../styles/GlobalStyles';
import OutlinedTextInput from '../../components/OutlinedTextInput';
import {useDispatch, useSelector} from 'react-redux';
import ACTION_TYPES from '../../store/ActionTypes';
import AppColors from '../../utils/AppColors';
import ContainedButton from '../../components/ContainedButton';
import {
  addTodo,
  clearDateTimeError,
  clearDescriptionError,
  clearPriorityError,
  clearState,
  clearTitleError,
  updateTodo,
} from '../../store/actions/todo/AddEditTodoAction';
import {Constants} from '../../utils/Constants';
import {updateTodoList} from '../../store/actions/todo/TodoListActions';
import DateTimePickerInput from '../../components/DateTimePickerInput';
import BottomSheetInput from '../../components/BottomSheetInput';

export const ADD_EDIT_TODO_SCREEN = 'AddEditTodoScreen';

const AddEditTodoScreen = ({route, navigation}) => {
  const bottomSheetList = [
    {id: 1, title: 'High'},
    {id: 2, title: 'Medium'},
    {id: 3, title: 'Low'},
  ];

  const state = useSelector(rootState => rootState.addEditTodoReducer);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [priority, setPriority] = useState('');

  const {type, data} = route.params;

  useEffect(() => {
    if (type === Constants.ADD) {
      navigation.setOptions({
        title: 'Add Todo',
      });
    } else if (type === Constants.UPDATE) {
      navigation.setOptions({
        title: 'Update Todo',
      });
      if (data != null) {
        setTitle(data.title);
        setDescription(data.description);
        setDateTime(data.dateTime);
        setPriority(data.priority);
      }
    } else {
      navigation.setOptions({
        title: '',
      });
    }

    // called when screen popped from stack
    return function cleanup() {
      dispatch(clearState());
    };
  }, [data, dispatch, navigation, type]);

  useEffect(() => {
    if (state.status === ACTION_TYPES.SUCCESS) {
      dispatch(updateTodoList(type, state.todoItem));
      ToastAndroid.show(state.message, ToastAndroid.SHORT);
      navigation.goBack();
    } else if (state.status === ACTION_TYPES.ERROR) {
      ToastAndroid.show(state.message, ToastAndroid.SHORT);
    }
  }, [dispatch, navigation, state.message, state.status, state.todoItem, type]);

  function button(status) {
    if (status === ACTION_TYPES.LOADING) {
      return (
        <ActivityIndicator
          animating={true}
          color={AppColors.colorPrimary}
          style={styles.indicator}
        />
      );
    } else {
      return (
        <ContainedButton
          title={type === Constants.UPDATE ? 'Update' : 'Add'}
          style={styles.button}
          onPress={() => {
            Keyboard.dismiss();
            if (type === Constants.ADD) {
              dispatch(addTodo(title, description, dateTime, priority));
            } else if (type === Constants.UPDATE) {
              dispatch(
                updateTodo(data._id, title, description, dateTime, priority),
              );
            }
          }}
        />
      );
    }
  }

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="always">
        <OutlinedTextInput
          label="Title"
          value={title}
          errorText={state.titleError}
          onChangeText={value => {
            if (state.titleError !== '') {
              dispatch(clearTitleError());
            }
            setTitle(value);
          }}
        />
        <OutlinedTextInput
          label="Description"
          value={description}
          errorText={state.descriptionError}
          onChangeText={value => {
            if (state.descriptionError !== '') {
              dispatch(clearDescriptionError());
            }
            setDescription(value);
          }}
        />
        <DateTimePickerInput
          label="Date Time"
          value={dateTime}
          errorText={state.dateTimeError}
          onChangeText={value => {
            if (state.dateTimeError !== '') {
              dispatch(clearDateTimeError());
            }
            setDateTime(value);
          }}
          onDateSelected={value => {
            setDateTime(value);
          }}
        />
        <BottomSheetInput
          list={bottomSheetList}
          label="Priority"
          value={priority}
          errorText={state.priorityError}
          onChangeText={value => {
            if (state.priorityError !== '') {
              dispatch(clearPriorityError());
            }
            setPriority(value);
          }}
          onItemSelected={value => {
            setPriority(value);
          }}
        />
        {button(state.status)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  button: {
    marginTop: 24,
  },
  indicator: {
    paddingTop: 16,
  },
});

export default AddEditTodoScreen;
