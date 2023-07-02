import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackCmp from "./features/Navigation/Stacks/Stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dashbord from "./features/ExchangePool/Screnns/Dashbord";
import VerifyEmail from "./features/Register/Screens/VerifyEmail";

const App = () => {
  const Tab = createBottomTabNavigator();
  function BottomTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}
      >
        <Tab.Screen
          name="Dashbord"
          component={StackCmp}
          options={{
            tabBarLabel: "Dash",
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={24}
                  color="black"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="WelcomPool"
          component={StackCmp}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={24}
                  color="black"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="RegisterPassword"
          component={StackCmp}
          options={{
            tabBarLabel: "Riders",
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={24}
                  color="black"
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="VerifyEmail"
          component={StackCmp}
          options={{
            tabBarLabel: "Track",
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={24}
                  color="black"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <StackCmp />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
