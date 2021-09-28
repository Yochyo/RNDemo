import React, {PropsWithChildren, useState} from 'react';
import {Button, Text, View} from 'react-native';

export const Counter = (props: PropsWithChildren<{}>) => {
  let [count, setCount] = useState(0);
  return (
    <View>
      <Button title={'+1'} onPress={() => setCount(count + 1)} />
      <Text>Count: {count}</Text>
    </View>
  );
};
