import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Schedule from '../../DrawerPool/Screens/Schedule';

const ScheduleStack = () => {
    const StackSchedule = createNativeStackNavigator();
  return (
    <StackSchedule.Navigator>
        <StackSchedule.Screen name='Schedule' component={Schedule}/>    
    </StackSchedule.Navigator>
  )
}

export default ScheduleStack

const styles = StyleSheet.create({})