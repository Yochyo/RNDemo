import React, {PropsWithChildren, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const Counter = (props: PropsWithChildren<{}>) => {
  let [count, setCount] = useState(0);
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
  },
  button: {
    marginBottom: 16,
    width: '50%',
  },
});
