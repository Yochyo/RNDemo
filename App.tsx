import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Todo} from './src/components/todo-item';
import {Counter} from './src/components/counter';
import {TodoList} from './src/components/todo-list';
import {MyAsyncStorage} from './src/async-storage';
import {Button, Dialog, FAB} from 'react-native-paper';

const App = () => {
  let [items, setItems] = useState<Todo[]>([]);
  let [deleteItem, setDeleteItem] = useState<Todo | undefined>(undefined);

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

  return (
    <View style={styles.container}>
      <TodoList items={items} onClickItem={setDeleteItem} />
      <Counter />
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
        onPress={() => console.log('Pressed')}
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

export default App;
