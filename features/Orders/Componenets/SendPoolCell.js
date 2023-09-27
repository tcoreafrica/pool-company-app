import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import { AddressTextFromCoordinates } from "../../../serveur/helper";

export const SendPoolCell = ({ data, navigation }) => {

  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  
  

  useEffect(() => {
    AddressTextFromCoordinates(
      data.pickUpLocation[0],
      data.pickUpLocation[1]
    ).then((res) => {
      setLocationFrom(res);
    });
    AddressTextFromCoordinates(
      data.destinationLocation[0],
      data.destinationLocation[1]
    ).then((res) => {
      setLocationTo(res);
    });
  }, []);
  
  return (
    <TouchableOpacity
      style={{
        height: 80,
        //   flex: 1,
        borderRadius: 2,
        width: "100%",
        paddingVertical: 10,
        paddingLeft: 40,
        elevation: 0.5,
      }}
    >
      <View style={{ position: "absolute", top: 17, left: 15 }}>
        <PhaseLoso />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems:'center' }}>
        <Text style={{width:'40%',height:40}}>{locationFrom}</Text>
        <AntDesign name="arrowright" size={24} color="black" />
        <Text style={{ fontSize: 12,width:'40%',height:40 }}>{locationTo}</Text>
        <Text style={{ fontWeight: "bold" }}>{data.price}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", paddingRight: 30 }}>
          <TimeLogo style={{ marginVertical: 3 }} />
          <Text style={{ paddingLeft: 5 }}>{data.date.substr(0, 10)}</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center'}}>
          <TimeLogo style={{ marginVertical: 3 }} />
          <Text style={{ paddingLeft: 5, color: "red" }}>Express</Text>
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PushOrder",data)}
            style={{
              height: 30,
              borderRadius: 5,
              backgroundColor: "#053582",
              // marginHorizontal: 30,
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
              Send to pool
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
