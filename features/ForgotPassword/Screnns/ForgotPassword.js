import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { sendOTP } from "../../../serveur/login/login";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    setLoading(true);
    sendOTP(email).then((res) => {
      if (res <= 201) {
        navigation.navigate("VerifyPassword",{email});
      } else setMessage(res.error);
      setLoading(false);
    });
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
      <View style={{}}>
        <Text style={{ paddingVertical: 12, fontWeight: "bold" }}>
          What’s your email or phone number
        </Text>
        <Text style={{ marginBottom: 14 }}>
          A password recovery mail will be sent into your email address
        </Text>
      </View>

      <View>
        <TextInput
          style={{
            padding: 12,
            marginBottom: 12,
            backgroundColor: "#EBEBEB",
            borderRadius: 30,
          }}
          placeholder="  Enter your email"
          onChangeText={setEmail}
        />

        <Text style={{ margin: 10, color: "red" }}>{message}</Text>

        <TouchableOpacity
          style={{
            padding: 12,

            backgroundColor: "#053582",
            borderRadius: 30,
          }}
          disabled={email == ""}
          onPress={handleSendOTP}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                fontWeight: "300",
                fontSize: 14,
                alignSelf: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Reset password
            </Text>
          )}
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
        onPress={() => navigation.navigate("Welcom1")}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
