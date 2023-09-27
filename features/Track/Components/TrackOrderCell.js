import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import { useNavigation } from "@react-navigation/native";
import { getAllMyCompanyPool } from "../../../serveur/pools/pool";
import { AddressTextFromCoordinates } from "../../../serveur/helper";

export const TrackOrderCell = ({data,navigation}) => {

    const [locationFrom, setLocationFrom] = useState("");
    const [locationTo, setLocationTo] = useState("");
    const onItemPress = () => {
      setExpanded(!expanded);
    };
  
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
      onPress={() => navigation.navigate("DeliveryDetails",data)}
      style={{
        height: 80,
        // flex: 1,
        borderRadius: 2,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 6,
        paddingLeft: 40,
        elevation: 1,
      }}
    >
      <View style={{ position: "absolute", top: 17, left: 15 }}>
        <PhaseLoso />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{width:'40%',height:40}}>{locationFrom}</Text>
        <AntDesign name="arrowright" size={24} color="black" />
        <Text style={{ fontSize: 12 ,width:'40%',height:40}}>{locationTo}</Text>
        <Text style={{ fontWeight: "bold" }}>{data.amount}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <TimeLogo style={{ marginVertical: 3 }} />
          <Text style={{ paddingLeft: 5 }}>{data.date.substr(0, 10)}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TimeLogo style={{ marginVertical: 3 }} />
          <Text style={{ paddingLeft: 5, color: "red" }}>Express</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
