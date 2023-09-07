import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { changePassword } from "../../../serveur/login/login";

const CreatePassword = ({ navigation, route }) => {
  const { OTP } = route.params;
  console.log(OTP);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRequestChange = () => {
    let credentials = {
      otp: OTP,
      password: password,
      retypePassword: password,
    };
    changePassword(credentials).then((res) => {
      console.log(res);

      res.success == false ? null : navigation.navigate("PasswordChanges");
    });
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 100,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Create New Password
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <Text>Choose a new password</Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>New Password</Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={{ color: "red", fontSize: 14, fontWeight: "500" }}>
          Minimum 6 characters required
        </Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Retype Password
        </Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <TextInput
          style={[
            styles.textInput2,
            {
              borderColor:
                repeatPassword == ""
                  ? "black"
                  : repeatPassword != password
                  ? "red"
                  : "green",
            },
          ]}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          onChangeText={setRepeatPassword}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={{ color: "red", fontSize: 14, fontWeight: "500" }}>
          {repeatPassword != password ? "Repeat the same password please" : ""}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleRequestChange}
        style={{
          padding: 12,
          position: "absolute",
          bottom: 10,
          width: "100%",
          backgroundColor: "#053582",
          borderRadius: 30,
        }}
        disabled={repeatPassword != password}
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
          Save Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textInput2: {
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
