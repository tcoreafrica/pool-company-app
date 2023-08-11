import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import Dashbord from "../../ExchangePool/Screnns/Dashbord";
import Interneterror from "../../ExchangePool/Screnns/Interneterror";
import Success from "../../ExchangePool/Screnns/Success";
import RiderDetails from "../../Riders/Screens/RiderDetails";
import Support from "../../DrawerPool/Screens/Support";

const StackCmp2 = () => {
  const Stack2 = createNativeStackNavigator();
  return (
    <Stack2.Navigator >
      <Stack2.Screen
        name="Dashbord"
        component={Dashbord}
        options={{ headerShown: false }}
      />
      <Stack2.Screen
        name="Interneterror"
        component={Interneterror}
        options={{ headerShown: false }}
      />
      <Stack2.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
      
      
      
    </Stack2.Navigator>
  );
};

export default StackCmp2;

const styles = StyleSheet.create({});
