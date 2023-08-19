import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { BottomNavigation } from "react-native-paper";
import StackCmp from "./Stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashbord from "../../ExchangePool/Screnns/Dashbord";
import { CommonActions } from "@react-navigation/native";
import DelivryLogo from "../../../constants/DelivryLogo";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import Scheduellogo from "../../../constants/Scheduellogo";
import Payementlogo from "../../../constants/Payement";
import SavedCardLogo from "../../../constants/SavedCardLogo";
import ProfileLogo from "../../../constants/ProfileLogo";
import ShareLogo from "../../../constants/ShareLogo";
import SupportLogo from "../../../constants/Support";
import { View, Text } from "react-native";
import AvatarLogo from "../../../constants/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import DrawerLogo from "../../../constants/DrawerLogo";
import DashLogo from "../../../constants/DashLogo";
import OrdersLogo from "../../../constants/OrdersLogo";
import RidersLogo from "../../../constants/RidersLogo";
import TrackLogo from "../../../constants/TrackLogo";
import RiderStack from "./RiderStack";
import TrackerStack from "./TrackerStack";
import SupportStack from "./SupportStack";
import { Share } from "react-native";
import ProfileStack from "./ProfileStack";
import DelivryHistory from "../../DrawerPool/Screens/DelivryHistory";
import ScheduleStack from "./ScheduleStack";
import OrderStack from "./OrderStack";

import { Provider, useSelector } from "react-redux"; // Importing the useDispatch hook
import AsyncStorage from "@react-native-async-storage/async-storage";

export default NavigatorBase = () => {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const user = useSelector((state) => state.user);
  const [moveToHome, setMoveToHome] = useState(false);


  const userFetched = async () => {
    try {
      const key = "user";

      const value = await AsyncStorage.getItem(key);

 
      if (value !== null && user.user) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await userFetched();
      setMoveToHome(result);
    };

    fetchData();
  }, [user]); // Empty dependency array to run effect only once


 

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
              return <DashLogo />;
            },
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => {
              return <OrdersLogo />;
            },
          }}
        />
        <Tab.Screen
          name="Riders"
          component={RiderStack}
          options={{
            tabBarLabel: "Riders",
            tabBarIcon: ({ color, size }) => {
              return <RidersLogo />;
            },
          }}
        />

        <Tab.Screen
          name="Track"
          component={TrackerStack}
          options={{
            tabBarLabel: "Track",
            tabBarIcon: ({ color, size }) => {
              return <TrackLogo />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: "Check out this awesome app!",
        url: "https://your-app-download-link.com", // Replace with your app's download link
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared successfully
          console.log(`Shared via ${result.activityType}`);
        } else {
          // Shared successfully
          console.log("Shared");
        }
      } else if (result.action === Share.dismissedAction) {
        // Sharing dismissed
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing app:", error.message);
    }
  };
  const CustomDrawerContent = (props) => {
    const { navigation } = props;

    return (
      <DrawerContentScrollView {...props}>
        <View style={{ position: "absolute", right: 10, top: 24 }}>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
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
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label="Schedule delivery"
          icon={({ focused, color, size }) => <Scheduellogo />}
          onPress={() => props.navigation.navigate("ScheduleStack")}
        />
        <DrawerItem
          label="Delivery History"
          icon={({ focused, color, size }) => <DelivryLogo />}
          onPress={() => props.navigation.navigate("DelivryHistory")}
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
          onPress={() => props.navigation.navigate("Profile")}
        />
        <DrawerItem
          label="Support"
          icon={({ focused, color, size }) => <SupportLogo />}
          onPress={() => props.navigation.navigate("Support")}
        />
        <DrawerItem
          label="Share App"
          icon={({ focused, color, size }) => <ShareLogo />}
          onPress={shareApp}
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
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {moveToHome ? (
          <>
            <Drawer.Screen
              name="Dashboard"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Support"
              component={SupportStack}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Profile"
              component={ProfileStack}
              options={{ headerShown: false }}
            />
            <Drawer.Screen name="DelivryHistory" component={DelivryHistory} />
            <Drawer.Screen
              name="ScheduleStack"
              component={ScheduleStack}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="OrderStack"
              component={OrderStack}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Drawer.Screen
            name="Stack"
            component={StackCmp}
            options={{ headerShown: false }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
