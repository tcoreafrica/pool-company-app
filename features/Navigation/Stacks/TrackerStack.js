import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Track from '../../Track/Screens/Track';

import DeliveryDetails from '../../Track/Screens/DeliveryDetails';
import DelivryHistory from '../../DrawerPool/Screens/DelivryHistory';

const TrackerStack = () => {
    const StackTrack = createNativeStackNavigator();
  return (
    <StackTrack.Navigator>
        <StackTrack.Screen name='Track' component={Track} options={{title :  "TrackOrder" }}/>
        <StackTrack.Screen name='DelivryHistory' component={DelivryHistory} />
        <StackTrack.Screen name='DeliveryDetails' component={DeliveryDetails} />
    </StackTrack.Navigator>
  )
}

export default TrackerStack

const styles = StyleSheet.create({})