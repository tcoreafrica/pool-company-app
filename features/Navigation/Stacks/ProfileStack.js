import { StyleSheet, Text, View , TouchableOpacity} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../DrawerPool/Screens/ProfileScreen";
import ChangeLoginScreen from "../../DrawerPool/Screens/ChangeLoginScreen";
import { Ionicons } from '@expo/vector-icons';

const ProfileStack = () => {
  const StackProfile = createNativeStackNavigator();
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen 
      
      name="ProfileScreen" component={ProfileScreen} 
      options={({ navigation }) => ({
        title: 'Profile', // Set the title of the screen
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
            <Text style={{ textAlign: 'center', fontSize: 18 , fontWeight :'700' , marginRight : 60 }}>Profile</Text>
          </View>
        ),
        
      })}
      />
      <StackProfile.Screen
        name="ChangeLoginScreen"
        component={ChangeLoginScreen}
      />
    </StackProfile.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
