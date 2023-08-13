import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Schedule from '../../Schedule/Screens/Schedule';
import Deliverysummary from '../../Schedule/Screens/Deliverysummary';
import PayementMethod from '../../Schedule/Screens/PayementMethod';
import FinaleScreen from '../../Schedule/Screens/FinaleScreen';


const ScheduleStack = () => {
    const StackSchedule = createNativeStackNavigator();
  return (
    <StackSchedule.Navigator>
        <StackSchedule.Screen name='Schedule' component={Schedule}/> 
        <StackSchedule.Screen name='Deliverysummary' component={Deliverysummary}/>
        <StackSchedule.Screen name='PayementMethod' component={PayementMethod}/>   
        <StackSchedule.Screen name='FinaleScreen' component={FinaleScreen}/>  
    </StackSchedule.Navigator>
  )
}

export default ScheduleStack

const styles = StyleSheet.create({})