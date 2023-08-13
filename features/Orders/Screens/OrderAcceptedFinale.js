import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PhaseLoso from "../../../constants/PhaseLogo";

const OrderAcceptedFinale = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ alignSelf: "center", marginTop: 50 }}>
        <Image source={require("../../../assets/acceptedorder.png")} />
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 25,
            paddingVertical: 20,
          }}
        >
          Order pushed to delivery pool successfully!
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Package type</Text>
        <Text>Delivery type:</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
        }}
      >
        <PhaseLoso />
        <Text style={{ color: "#053582", fontWeight: "bold" }}>
          Express (1hr)
        </Text>
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",

            fontSize: 17,
            marginTop: 20,
            color: "red",
          }}
        >
          This order no more shows in your company order list
        </Text>
      </View>

      <View style={{ marginTop: 80 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
            Back to company pool
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderAcceptedFinale;

const styles = StyleSheet.create({});
