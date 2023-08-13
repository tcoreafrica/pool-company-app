import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PhaseLoso from "../../../constants/PhaseLogo";

const OrderAccepted = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ alignSelf: "center"  , marginTop : 50 }}>
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
          Order Accepted!
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
      
      <View style={{marginTop  : 120}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('OrderAccepted')}
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
            Assign to rider
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical : 15}}>
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
          style={{ height: 40, backgroundColor: "white", borderRadius: 10 }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              paddingVertical: 7,
              fontSize: 17,
            }}
          >
            Go to company pool
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderAccepted;

const styles = StyleSheet.create({});
