import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerLogo from "../../../constants/DrawerLogo";
import AvatarLogo from "../../../constants/Avatar";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../../redux/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const signout = async () => {
    await AsyncStorage.removeItem("user")
    dispatch({ type: DELETE_USER });
    
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 15 }}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <AvatarLogo />
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangeLoginScreen")}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 16, paddingVertical: 10 }}
          >
            Change Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Touchcore Deliveries
        </Text>
      </View>
      <View style={{ marginVertical: 40 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Touchcore Deliveries
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>08123232323</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>08123232323</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Touchdel@gmail.com
        </Text>
      </View>
      <TouchableOpacity
        style={{ height: 50, backgroundColor: "green", marginVertical: 20 }}
      >
        <Text
          style={{
            alignSelf: "center",
            paddingVertical: 10,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Security
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ height: 50, backgroundColor: "red", marginVertical: 20 }}
      >
        <Text
          style={{
            alignSelf: "center",
            paddingVertical: 10,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          View registration
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={signout}
        style={{ backgroundColor: "blue", height: 40, borderRadius: 10 }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            paddingVertical: 7,
            alignSelf: "center",
            color: "white",
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
