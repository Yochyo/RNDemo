import {useNavigation} from '@react-navigation/native';
import {StackParamList} from './todo-nav-screen';
import React from 'react';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {StyleSheet, View} from 'react-native';
import {TodoItemPost} from '../components/todo-item-post';

export const TodoPostScreen = () => {
  let navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, 'TodoPost'>>();

  return (
    <View style={styles.container}>
      <TodoItemPost
        onSave={(title: string, description: string) => {
          navigation.navigate('Todo', {title: title, description: description});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
