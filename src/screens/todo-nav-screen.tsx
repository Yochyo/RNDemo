import {Todo} from '../components/todo-item';
import React from 'react';
import {TodoListScreen} from './todo-list-screen';
import {TodoPostScreen} from './todo-post-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackParamList>();

export type StackParamList = {
  Todo: Todo | undefined;
  TodoPost: undefined;
};

export const TodoNavScreen = () => {
  return (
    <Stack.Navigator initialRouteName={'Todo'}>
      <Stack.Screen
        name={'Todo'}
        component={TodoListScreen}
        initialParams={undefined}
      />
      <Stack.Screen
        name={'TodoPost'}
        component={TodoPostScreen}
        initialParams={undefined}
      />
    </Stack.Navigator>
  );
};
