import React, {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';
import {Todo, TodoItem} from './todo-item';

export const TodoList = (
  props: PropsWithChildren<{
    items: Todo[];
  }>,
) => {
  return (
    <FlatList
      data={props.items}
      renderItem={it => <TodoItem todoItem={it.item} />}
      keyExtractor={it => it.title}
    />
  );
};
