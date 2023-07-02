import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcom1 from "../../Login/Screens/Welcom1";
import Welcom2 from "../../Login/Screens/Welcom2";
import WelcomBack from "../../Login/Screens/WelcomBack";
import ForgotPassword from "../../ForgotPassword/Screnns/ForgotPassword";
import VerifyPassword from "../../ForgotPassword/Screnns/VerifyPassword";
import CreatePassword from "../../ForgotPassword/Screnns/CreatePassword";
import PasswordChanges from "../../ForgotPassword/Screnns/PasswordChanges";
import RegisterPassword from "../../Register/Screens/RegisterPassword";
import VerifyEmail from "../../Register/Screens/VerifyEmail";
import WelcomPool from "../../Register/Screens/WelcomPool";
import Dashbord from "../../ExchangePool/Screnns/Dashbord";
import RegisterName from "../../Register/Screens/RegisterName";
import Onboording from "../../Onboording/screens/Onboording";

const StackCmp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Onboording">
      <Stack.Screen
        name="Welcom1"
        component={Welcom1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcom2"
        component={Welcom2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomBack"
        component={WelcomBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyPassword"
        component={VerifyPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePassword"
        component={CreatePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordChanges"
        component={PasswordChanges}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterName"
        component={RegisterName}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterPassword"
        component={RegisterPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomPool"
        component={WelcomPool}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashbord"
        component={Dashbord}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
      name="Onboording"
      component={Onboording}
      options={{
        headerShown: false
      }}
      />
    </Stack.Navigator>
  );
};

export default StackCmp;

const styles = StyleSheet.create({});
