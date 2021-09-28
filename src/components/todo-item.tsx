import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>{props.todoItem.title}</Text>
      <Text>{props.todoItem.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    marginBottom: 4,
  },
});
