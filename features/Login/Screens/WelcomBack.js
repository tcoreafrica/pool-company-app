import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_USER, DELETE_USER } from "../../redux/actionTypes";
// import reducers from "../../features/redux/reducers";
import { useDispatch, useSelector } from "react-redux"; // Importing the useDispatch hook
import loginUser from "../../../serveur/login/login";

const WelcomBack = ({ navigation, route }) => {
  const { email } = route.params; // Retrieve the data from the route object
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const login = async () => {
    try {
      loginUser("admin@pool.com", "password").then(async (res) => {
        await AsyncStorage.setItem("user", JSON.stringify(res));
        dispatch({ type: ADD_USER, payload: res });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 60,
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>
          Welcome back, {email.split("@")[0] || email}
        </Text>
      </View>
      <Text style={{ marginBottom: 10 }}>Enter your password to continue</Text>
      <View>
        <TouchableOpacity
          style={{
            padding: 12,
            marginBottom: 12,
            backgroundColor: "#EBEBEB",
            borderRadius: 30,
          }}
        >
          <Text style={{ fontWeight: "300", fontSize: 12, paddingLeft: 8 }}>
            Enter password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={login}
          // onPress={() => navigation.navigate("Dashboard")}
          style={{
            padding: 12,

            backgroundColor: "#053582",
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              fontWeight: "300",
              fontSize: 14,
              alignSelf: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#EBEBEB",
          position: "absolute",
          bottom: 5,
          borderRadius: 30,
          width: 100,
        }}
        onPress={() => navigation.navigate("Welcom2", { email })}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomBack;

const styles = StyleSheet.create({});
