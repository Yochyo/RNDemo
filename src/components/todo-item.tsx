import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

export interface Todo {
  title: string;
  description: string;
}

export const TodoItem = (
  props: PropsWithChildren<{
    todoItem: Todo;
  }>,
) => {
  return (
    <View>
      <Text>{props.todoItem.title}</Text>
      <Text>{props.todoItem.description}</Text>
    </View>
  );
};
