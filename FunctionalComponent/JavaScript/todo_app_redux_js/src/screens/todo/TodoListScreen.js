import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {GlobalStyles} from '../../styles/GlobalStyles';
import Fab from '../../components/Fab';
import {ADD_EDIT_TODO_SCREEN} from './AddEditTodoScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteTodo,
  fetchTodoList,
  updateTodoList,
} from '../../store/actions/todo/TodoListActions';
import {ActivityIndicator, Card, IconButton} from 'react-native-paper';
import AppColors from '../../utils/AppColors';
import {Constants} from '../../utils/Constants';
import ACTION_TYPES from '../../store/ActionTypes';

export const TODOLIST_SCREEN = 'TodoListScreen';

const TodoListScreen = ({navigation}) => {
  const state = useSelector(rootState => rootState.todoListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());

    return function cleanup() {};
  }, [dispatch]);

  useEffect(() => {
    if (state.status === ACTION_TYPES.SUCCESS) {
      if (state.type === Constants.DELETE) {
        dispatch(updateTodoList(Constants.DELETE, state.todoItem));
        ToastAndroid.show(state.message, ToastAndroid.SHORT);
      }
    } else if (state.status === ACTION_TYPES.ERROR) {
      ToastAndroid.show(state.message, ToastAndroid.SHORT);
    }
  }, [
    dispatch,
    navigation,
    state.message,
    state.status,
    state.todoItem,
    state.type,
  ]);

  const fabHandler = () => {
    navigation.navigate(ADD_EDIT_TODO_SCREEN, {
      type: Constants.ADD,
    });
  };

  const showAlert = item =>
    Alert.alert(
      'Alert',
      'Do you want to delete?',
      [
        {
          text: 'CANCEL',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(deleteTodo(item));
          },
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );

  const renderTodoItem = ({item}) => (
    <Card style={styles.card}>
      <View>
        <View style={styles.topView}>
          <View style={styles.topInnerView}>
            <Text style={{...styles.text, ...styles.title}}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
          </View>
          <IconButton
            icon="pencil"
            color={AppColors.colorBlack}
            size={20}
            onPress={() => {
              navigation.navigate(ADD_EDIT_TODO_SCREEN, {
                type: Constants.UPDATE,
                data: item,
              });
            }}
          />
          <IconButton
            icon="delete"
            color={AppColors.colorBlack}
            size={20}
            onPress={() => {
              showAlert(item);
            }}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={{...styles.text, ...styles.dateTime}}>
            {item.dateTime}
          </Text>
          <Text style={styles.text}>{item.priority}</Text>
        </View>
      </View>
    </Card>
  );

  function loading(status) {
    if (status === ACTION_TYPES.LOADING) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} color={AppColors.colorPrimary} />
        </View>
      );
    } else {
      return null;
    }
  }

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <FlatList
        style={styles.list}
        keyExtractor={(item, _) => item._id}
        data={state.todoList}
        renderItem={renderTodoItem}
      />
      {loading(state.status)}
      <View style={styles.fabContainer}>
        <Fab icon="plus" onPress={fabHandler} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginEnd: 16,
  },
  text: {
    color: AppColors.colorBlack,
    fontSize: 16,
  },
  list: {
    paddingVertical: 16,
  },
  topInnerView: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 8,
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    paddingStart: 8,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 5,
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  dateTime: {
    flex: 1,
  },
});

export default TodoListScreen;
