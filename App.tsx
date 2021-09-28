import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TodoItem} from './src/components/todo-item';
import {Counter} from './src/components/counter';

const App = () => {
  return (
    <View style={styles.container}>
      <TodoItem todoItem={{title: 'Item 1', description: 'description'}} />
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
