import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

const ForgotPassword = ({ navigation }) => {
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
        <TouchableOpacity
          style={{
            padding: 12,
            marginBottom: 12,
            backgroundColor: "#EBEBEB",
            borderRadius: 30,
          }}
        >
          <Text style={{ fontWeight: "300", fontSize: 12, paddingLeft: 8 }}>
            Enter your email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("VerifyPassword")}
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
            Reset password
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
        onPress={()=>navigation.navigate("Welcom1")}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
