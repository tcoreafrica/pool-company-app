import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Schedule from '../../Schedule/Screens/Schedule';
import Deliverysummary from '../../Schedule/Screens/Deliverysummary';
import PayementMethod from '../../Schedule/Screens/PayementMethod';
import FinaleScreen from '../../Schedule/Screens/FinaleScreen';
import { Ionicons } from '@expo/vector-icons';



const ScheduleStack = () => {
    const StackSchedule = createNativeStackNavigator();
  return (
    <StackSchedule.Navigator >
        <StackSchedule.Screen name='Schedule' 
        component={Schedule}
        options={({ navigation }) => ({
          title: 'Schedule', // Set the title of the screen
          headerLeft: () => (
            <TouchableOpacity
              style={{   }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name='ios-arrow-back' size={24} color='black' />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={{ flex: 1, alignItems: 'center'  }}>
              <Text style={{ textAlign: 'center', fontSize: 18 , fontWeight :'700' , marginRight : 60 }}>Schedule</Text>
            </View>
          ),
          
        })}
        
        /> 
        <StackSchedule.Screen name='Deliverysummary' component={Deliverysummary}/>
        <StackSchedule.Screen name='PayementMethod' component={PayementMethod}/>   
        <StackSchedule.Screen name='FinaleScreen' component={FinaleScreen}/>  
    </StackSchedule.Navigator>
  )
}

export default ScheduleStack

const styles = StyleSheet.create({})