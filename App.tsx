import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Todo} from './src/components/todo-item';
import {Counter} from './src/components/counter';
import {TodoList} from './src/components/todo-list';
import {MyAsyncStorage} from './src/async-storage';
import {TodoItemPost} from './src/components/todo-item-post';

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
      <TodoItemPost onSave={(title, description) => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
