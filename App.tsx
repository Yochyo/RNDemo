import React from 'react';
import {TodoNavScreen} from './src/screens/todo-nav-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CounterScreen} from './src/screens/counter-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type TabParamList = {
  Todo: undefined;
  Counter: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Todo'}>
        <Tab.Screen
          name={'Todo'}
          component={TodoNavScreen}
          options={{
            headerShown: false,
            tabBarIcon: props => (
              <MaterialCommunityIcons
                name={'book'}
                size={props.size}
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Counter'}
          component={CounterScreen}
          options={{
            tabBarIcon: props => (
              <MaterialCommunityIcons
                name={'plus-one'}
                size={props.size}
                color={props.color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
