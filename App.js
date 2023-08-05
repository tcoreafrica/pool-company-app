import "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { BottomNavigation } from "react-native-paper";
import StackCmp from "./features/Navigation/Stacks/Stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashbord from "./features/ExchangePool/Screnns/Dashbord";
import Stack2 from "./features/Navigation/Stacks/Stack2";
import StackCmp2 from "./features/Navigation/Stacks/Stack2";
import Orders from "./features/ExchangePool/Screnns/Orders";
import { CommonActions } from '@react-navigation/native';
import Riders from "./features/Riders/Screens/Riders";
import Track from "./features/Track/Screens/Track";



const App = () => {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const DrawerScreenOptions = {
    drawerStyle: {
      // Customize the drawer styles
      backgroundColor: "#f1f1f1",
      width: 200,
    },
    drawerContentOptions: {
      // Customize the drawer content options
      activeTintColor: "blue",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
  };
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
          component={Dashbord}
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
          name="Orders"
          component={Orders}
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
          name="Riders"
          component={Riders}
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
          name="Track"
          component={Track}
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
      
      {/* <StackCmp /> */}
      {/* <BottomTabNavigator />   */}
      <Drawer.Navigator screenOptions={DrawerScreenOptions} initialRouteName="Onboording">
        <Drawer.Screen name="Dashboard" component={BottomTabNavigator} />
        <Drawer.Screen
          name="Schedule delivery"
          component={StackCmp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Delivery History"
          component={StackCmp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Payments"
          component={StackCmp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Saved Cards"
          component={StackCmp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Profile summary"
          component={StackCmp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Support"
          component={StackCmp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Share App"
          component={StackCmp}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
