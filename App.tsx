import React from 'react';
import {TodoNavScreen} from './src/screens/todo-nav-screen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <TodoNavScreen />
    </NavigationContainer>
  );
};

export default App;
