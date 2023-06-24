import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcom1 from './features/Login/Screens/Welcom1';
import Welcom2 from './features/Login/Screens/Welcom2';
import WelcomBack from './features/Login/Screens/WelcomBack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcom1" component={Welcom1} options={{headerShown : false}}/>
        <Stack.Screen name="Welcom2" component={Welcom2} options={{headerShown : false}}/>
        <Stack.Screen name="WelcomBack" component={WelcomBack} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})