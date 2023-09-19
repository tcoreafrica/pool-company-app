import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";

const OrderCell = ({ item }) => {
 

  return (
    <TouchableOpacity
      style={{
        height: 80,
        flex: 1,
        borderRadius: 2,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingLeft: 40,
        elevation: 0.5,
      }}
      onPress={(item) => renderDescription(item)}
    >
      <View style={{ position: "absolute", top: 17, left: 15 }}>
        <PhaseLoso />
      </View>


      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Text>{item.pickUpLocation[0]}</Text>
          <AntDesign name="arrowright" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>{item.destinationLocation[0]}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.quantity}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", paddingRight: 30 }}>
            <TimeLogo style={{ marginVertical: 3 }} />
            <Text style={{ paddingLeft: 5 }}>{item.date.substr(0, 10)}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TimeLogo style={{ marginVertical: 3 }} />
            <Text style={{ paddingLeft: 5, color: "red" }}>Express </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("AcceptOrder", { item })}
            style={{
              height: 30,
              borderRadius: 5,
              backgroundColor: "#053582",
              // marginHorizontal: 100,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                paddingVertical: 5,
                paddingHorizontal: 5,
              }}
            >
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCell;
