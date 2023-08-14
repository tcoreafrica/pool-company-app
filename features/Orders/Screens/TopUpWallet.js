import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";

const TopUpWallet = ({ navigation }) => {
  
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ paddingVertical: 20 }}>
        <Text style={{ alignSelf: "center", fontSize: 18 }}>
          Wallet balance:
        </Text>
        <Text
          style={{
            alignSelf: "center",
            color: "#053582",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          N450.00
        </Text>
      </View>
      <View style={{ marginHorizontal: 10, borderRadius: 5, height: 50 }}>
        <TextInput
          placeholder="N0.00"
          keyboardType="numeric"
          style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 6 }}
        />
        <View style={{ height: 5, backgroundColor: "#FFB200" }}></View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AcceptOrderFinale")}
            style={{
              
              borderRadius: 5,
              backgroundColor: "#053582",
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: 5,
                paddingVertical: 5,
                alignSelf :'center',
                fontWeight :'bold'
              }}
            >
              OK
            </Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
};

export default TopUpWallet;

const styles = StyleSheet.create({});
