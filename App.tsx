import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Todo} from './src/components/todo-item';
import {Counter} from './src/components/counter';
import {TodoList} from './src/components/todo-list';
import {MyAsyncStorage} from './src/async-storage';
import {FAB} from 'react-native-paper';

const App = () => {
  let [items, setItems] = useState<Todo[]>([]);

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
      <TodoList items={items} />
      <Counter />
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

export default App;
