import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Support from "../../DrawerPool/Screens/Support";
import About from "../../DrawerPool/Screens/About";
import Report from "../../DrawerPool/Screens/Report";

const SupportStack = () => {
  const StackSupport = createNativeStackNavigator();
  return (
    <StackSupport.Navigator>
      <StackSupport.Screen name="Support" component={Support} />
      <StackSupport.Screen name="About" component={About} options={{ title : 'About App'}}/>
      <StackSupport.Screen name="Report" component={Report} options={{ title : 'Report an Issue'}}/>
    </StackSupport.Navigator>
  );
};

export default SupportStack;

const styles = StyleSheet.create({});
