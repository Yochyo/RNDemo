import React, {PropsWithChildren, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export const TodoItemPost = (
  props: PropsWithChildren<{
    onSave: (title: string, description: string) => void;
  }>,
) => {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder={'title'} onChangeText={setTitle} value={title} />
      <TextInput
        placeholder={'description'}
        onChangeText={setDescription}
        value={description}
      />
      <View style={styles.button}>
        <Button
          title={'Save'}
          onPress={() => {
            props.onSave(title, description);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 16,
  },
});
