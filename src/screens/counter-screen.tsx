import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Counter} from '../components/counter';

export const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
