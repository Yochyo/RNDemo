import React, {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';
import {Todo, TodoItem} from './todo-item';

export const TodoList = (
  props: PropsWithChildren<{
    items: Todo[];
    onClickItem: (item: Todo) => void;
  }>,
) => {
  return (
    <FlatList
      data={props.items}
      renderItem={it => (
        <TodoItem todoItem={it.item} onClick={props.onClickItem} />
      )}
      keyExtractor={it => it.title}
    />
  );
};
