import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import DrawerLogo from "../../../constants/DrawerLogo";
import AvatarLogo from "../../../constants/Avatar";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../../redux/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddressTextFromCoordinates } from "../../../serveur/helper";

const ProfileScreen = ({ navigation }) => {
  const [info, setInfo] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    !info && fetchData();

    getAddressText();
  }, [info]);

  const getAddressText = () => {
    console.log(info);
    info?.account?.detail?.address &&
      AddressTextFromCoordinates(
        info.account.detail.address[0],
        info.account.detail.address[1]
      ).then((res) => {
        setAddress(res);
      });
  };

  const fetchData = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      setInfo(JSON.parse(user));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const dispatch = useDispatch();

  const signout = async () => {
    await AsyncStorage.removeItem("user");
    dispatch({ type: DELETE_USER });
  };

  if (info == null) {
    return <ActivityIndicator />;
  }
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
      </View>
      <View style={{ marginTop: 5 }}>
        <Text>Company name</Text>

        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
 
          {info?.account?.username}
        </Text>
      </View>
      
      <View style={{ marginVertical: 20 }}>
        <Text>Phone</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {info?.account?.phone}
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Address</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{address}</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Email</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {info?.account?.email}
        </Text>
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("ChangeLoginScreen")}
      >
        <AvatarLogo />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            paddingVertical: 10,
            marginHorizontal: 5,
          }}
        >
          Change Login
        </Text>
      </TouchableOpacity>

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
