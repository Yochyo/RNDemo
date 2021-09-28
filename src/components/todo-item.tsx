import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

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
      <Image
        style={styles.icon}
        source={{
          uri: 'https://raw.githubusercontent.com/Yochyo/RNDemo/main/res/green_circle.png',
        }}
      />
      <View>
        <Text style={styles.title}>{props.todoItem.title}</Text>
        <Text>{props.todoItem.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  title: {
    marginBottom: 4,
  },
});
