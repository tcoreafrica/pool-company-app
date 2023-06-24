import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

const WelcomBack = ({ navigation }) => {
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
        <Text style={{fontWeight : 'bold' , fontSize :40}}>Welcome back, John</Text>
      </View>
      <Text style={{marginBottom : 10}}>Enter your password to continue</Text>
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
          onPress={() => navigation.navigate("WelcomBack")}
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
        onPress={()=>navigation.navigate("Welcom2")}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomBack;

const styles = StyleSheet.create({});
