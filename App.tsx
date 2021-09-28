import React from 'react';
import {View} from 'react-native';
import {TodoItem} from './src/components/todo-item';

const App = () => {
  return (
    <View>
      <TodoItem todoItem={{title: 'Item 1', description: 'description'}} />
    </View>
  );
};

export default App;
