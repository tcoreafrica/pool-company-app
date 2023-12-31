import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import TimeLogo from "../../../constants/TimeLogo";
import OrderDetails from "./OrderDetails";
import { AntDesign } from "@expo/vector-icons";
import { AddressTextFromCoordinates } from "../../../serveur/helper";

export const OrderCell = ({ item,navigation }) => {
  const [expanded, setExpanded] = useState(false);
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const onItemPress = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    AddressTextFromCoordinates(
      item.pickUpLocation[0],
      item.pickUpLocation[1]
    ).then((res) => {
      setLocationFrom(res);
    });
    AddressTextFromCoordinates(
      item.destinationLocation[0],
      item.destinationLocation[1]
    ).then((res) => {
      setLocationTo(res);
    });
  }, []);
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 80,
          //   flex: 1,
          borderRadius: 2,
          marginHorizontal: 10,
          paddingVertical: 10,
          paddingLeft: 40,
          elevation: 0.5,
        }}
        onPress={onItemPress}
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
            <Text style={{ width: "40%", height: 40 }}>{locationFrom}</Text>
            <AntDesign name="arrowright" size={24} color="black" />
            <Text style={{ width: "40%", height: 40 }}>{locationTo}</Text>
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
      {expanded && (
        <OrderDetails
          data={item}
          location={{ from: locationFrom, to: locationTo }}
        />
      )}
    </View>
  );
};
