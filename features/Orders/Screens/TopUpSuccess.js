import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const TopUpSuccess = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("OrderAcceptedFinale")}
        style={{ height: 40, backgroundColor: "#053582", borderRadius: 10 }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            alignSelf: "center",
            paddingVertical: 7,
            fontSize: 17,
          }}
        >
          Push Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUpSuccess;

const styles = StyleSheet.create({});
