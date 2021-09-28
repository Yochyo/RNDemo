import React from 'react';
import {View} from 'react-native';
import {TodoItem} from './src/components/todo-item';
import {Counter} from './src/components/counter';

const App = () => {
  return (
    <View>
      <TodoItem todoItem={{title: 'Item 1', description: 'description'}} />
      <Counter />
    </View>
  );
};

export default App;
