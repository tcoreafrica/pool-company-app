import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Riders from '../../Riders/Screens/Riders';
import RiderDetails from '../../Riders/Screens/RiderDetails';
import AssignOrders from '../../Riders/Screens/AssignOrders';

const RiderStack = () => {
    const StackRider = createNativeStackNavigator();
  return (
    <StackRider.Navigator>
        <StackRider.Screen name='Riders' component={Riders}/>
        <StackRider.Screen name='RiderDetails' component={RiderDetails} options={{title :'Rider Details'}}/>
        <StackRider.Screen name='AssignOrders' component={AssignOrders} />
    </StackRider.Navigator>
  )
}

export default RiderStack

const styles = StyleSheet.create({})