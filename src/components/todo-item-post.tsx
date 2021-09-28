import React, {PropsWithChildren, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

export const TodoItemPost = (
  props: PropsWithChildren<{
    onSave: (title: string, description: string) => void;
  }>,
) => {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'title'}
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'description'}
        onChangeText={setDescription}
        value={description}
      />
      <View style={styles.button}>
        <Button
          onPress={() => {
            props.onSave(title, description);
          }}>
          Save
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 8,
  },
  button: {
    marginBottom: 32,
    width: '30%',
    alignSelf: 'center',
  },
});
