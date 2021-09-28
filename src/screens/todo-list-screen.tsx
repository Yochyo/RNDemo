import {StyleSheet, View} from 'react-native';
import {TodoList} from '../components/todo-list';
import {Button, Dialog, FAB} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {Todo} from '../components/todo-item';
import {MyAsyncStorage} from '../async-storage';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackParamList} from './todo-nav-screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const TodoListScreen = () => {
  let [items, setItems] = useState<Todo[]>([]);
  let [deleteItem, setDeleteItem] = useState<Todo | undefined>(undefined);

  let route = useRoute<RouteProp<StackParamList, 'Todo'>>();
  let navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, 'Todo'>>();

  useEffect(() => {
    MyAsyncStorage.getObject<Todo[]>('todos', [
      {
        title: 'Item 1',
        description: 'description',
      },
      {
        title: 'Item 2',
        description: 'description 2',
      },
    ]).then(setItems);
  }, []);
  useEffect(() => {
    MyAsyncStorage.setObject('todos', items);
  }, [items]);
  useEffect(() => {
    let params = route.params;
    if (params !== undefined) {
      setItems([...items, params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <TodoList items={items} onClickItem={setDeleteItem} />
      <Dialog
        onDismiss={() => setDeleteItem(undefined)}
        visible={deleteItem !== undefined}>
        <Dialog.Title>Delete item {deleteItem?.title}?</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={() => setDeleteItem(undefined)}>No</Button>
          <Button
            onPress={() => {
              let item = deleteItem;
              if (item !== undefined) {
                setItems(copyWithout(items, item));
              }

              setDeleteItem(undefined);
            }}>
            Yes
          </Button>
        </Dialog.Actions>
      </Dialog>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('TodoPost', undefined)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

function copyWithout<T>(array: T[], e: T) {
  let copy = [...array];
  copy.splice(array.indexOf(e), 1);
  return copy;
}
