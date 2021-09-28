import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MyAsyncStorage} from '../async-storage';

export const Counter = (props: PropsWithChildren<{}>) => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    MyAsyncStorage.getNumber('counter', 0).then(setCount);
  }, []);

  useEffect(() => {
    MyAsyncStorage.setNumber('counter', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title={'+1'} onPress={() => setCount(count + 1)} />
      </View>
      <Text>Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 16,
    width: '50%',
  },
});
