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
import { CommonActions } from "@react-navigation/native";
import Riders from "./features/Riders/Screens/Riders";
import Track from "./features/Track/Screens/Track";
import DelivryLogo from "./constants/DelivryLogo";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import Scheduellogo from "./constants/Scheduellogo";
import Payementlogo from "./constants/Payement";
import SavedCardLogo from "./constants/SavedCardLogo";
import ProfileLogo from "./constants/ProfileLogo";
import ShareLogo from "./constants/ShareLogo";
import SupportLogo from "./constants/Support";
import { View, Text } from "react-native";
import AvatarLogo from "./constants/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import DrawerLogo from "./constants/DrawerLogo";
import DashLogo from "./constants/DashLogo";
import OrdersLogo from "./constants/OrdersLogo";
import RidersLogo from "./constants/RidersLogo";
import TrackLogo from "./constants/TrackLogo";

const App = () => {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const DrawerScreenOptions = {
    drawerStyle: {
      // Customize the drawer styles
      backgroundColor: "#f1f1f1",
      width: 300,
    },
    drawerContentOptions: {
      // Customize the drawer content options
      activeTintColor: "blue",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 16,
        fontWeight: "bold",
      }
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
                <DashLogo />
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
                <OrdersLogo />
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
                <RidersLogo />
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
                <TrackLogo />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  const CustomDrawerContent = (props) => {
    const { navigation } = props;
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ position: "absolute", right: 10, top: 44 }}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()} >
          <DrawerLogo />
        </TouchableOpacity>
        </View>
        
        <View style={{ height: 200, paddingTop: 55 }}>
          <View style={{ position: "absolute", right: 10, top: 50 }}>
            <Text style={{}}>Wallet:</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingHorizontal: 10,
            }}
          >
            <AvatarLogo />
            <Text style={{ color: "#053582", fontWeight: "800", fontSize: 20 }}>
              N4330.50
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Text>Touchcore Deliveries</Text>
            <View
              style={{
                borderRadius: 8,
                height: 25,
                width: 75,
                borderWidth: 2,
                borderColor: "#053582",
                backgroundColor: "white",
              }}
            >
              <Text style={{ alignSelf: "center" }}>Top Up</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 45,
              backgroundColor: "#053582",
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                paddingVertical: 10,
              }}
            >
              Upgrade your account now
            </Text>
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Schedule delivery"
          icon={({ focused, color, size }) => <Scheduellogo />}
          // onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Delivery History"
          icon={({ focused, color, size }) => <DelivryLogo />}
          // onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Payments"
          icon={({ focused, color, size }) => <Payementlogo />}
          // onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Saved Cards"
          icon={({ focused, color, size }) => <SavedCardLogo />}
          // onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Profile summary"
          icon={({ focused, color, size }) => <ProfileLogo />}
          // onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Support"
          icon={({ focused, color, size }) => <SupportLogo />}
          // onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Share App"
          icon={({ focused, color, size }) => <ShareLogo />}
          // onPress={() => props.navigation.navigate('Profile')}
        />
        {/* Add more screens with icons as needed */}
      </DrawerContentScrollView>
    );
  };

  return (
    <NavigationContainer>
      {/* <StackCmp /> */}
      {/* <BottomTabNavigator />   */}
      <Drawer.Navigator
        screenOptions={DrawerScreenOptions}
        initialRouteName="Onboording"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Dashboard" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
