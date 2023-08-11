import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../DrawerPool/Screens/ProfileScreen";
import ChangeLoginScreen from "../../DrawerPool/Screens/ChangeLoginScreen";

const ProfileStack = () => {
  const StackProfile = createNativeStackNavigator();
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen name="ProfileScreen" component={ProfileScreen}  options={{title :'Profile'}}/>
      <StackProfile.Screen
        name="ChangeLoginScreen"
        component={ChangeLoginScreen}
      />
    </StackProfile.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
