import * as React from 'react';
import Navigator from './Navigation/Navigation';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News Up To Date" component={Navigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;