import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux"; // Importing the useDispatch hook
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_USER, DELETE_USER } from "../../redux/actionTypes";
import { loginUser } from "../../../serveur/login/login";

const WelcomPool = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);

  const { email, password } = route.params;
  const dispatch = useDispatch();

  const login = async () => {
    setLoading(true);
    try {
      loginUser(email, password).then(async (res) => {
        // console.log(res);
        res.success == false
          ? setMessage(res.error)
          : (await AsyncStorage.setItem("user", JSON.stringify(res.data)),
            dispatch({ type: ADD_USER, payload: res.data }));
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Image source={require("../../ForgotPassword/Assets/capture.png")} />
      <Text style={{ fontWeight: "bold", fontSize: 26 }}>Welcome to Pool</Text>
      <Text>Setting up your account</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#053582",
          position: "absolute",
          bottom: 30,
          borderRadius: 30,
          width: 100,
        }}
        onPress={login}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={{ padding: 10, alignSelf: "center", color: "white" }}>
            Continue
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default WelcomPool;

const styles = StyleSheet.create({});
