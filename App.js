import * as React from 'react';
import Navigator from './Navigation/Navigation';
import { View, Text, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react/cjs/react.development';

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () =>({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function App() {

  return (
    <NavigationContainer style={StyleSheet.container}>
      <Stack.Navigator>
        <Stack.Screen name="News Up To Date" component={Navigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default App;