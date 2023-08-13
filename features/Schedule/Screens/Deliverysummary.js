import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddressForm from "../Components/AddressForm";
import PickupForm from "../Components/PickupForm";
import DropofForm from "../Components/DropofForm";
import { TouchableOpacity } from "react-native";

const Deliverysummary = ({navigation}) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Package type</Text>
        <Text>Package type</Text>
      </View>
      <View style={{ backgroundColor: "white", marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Pickup</Text>
          <Text>Pickup</Text>
        </View>

        <PickupForm />
      </View>
      <View style={{ backgroundColor: "white", marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Dropoff</Text>
          <Text>Dropoff</Text>
        </View>

        <DropofForm />
      </View>
      <View style={{height : 65  , marginTop : 20}}>
        <View style={{flexDirection :'row' , justifyContent :'space-between'}}>
            <Text>Delivery Type:</Text>
            <Text>Delivery Type:</Text>
        </View>
        <View style={{flexDirection :'row' , justifyContent :'space-between'}}>
            <Text style={{color:'#053582' , fontWeight :'bold' , fontSize :18}}>Express:</Text>
            <Text style={{color:'#053582' , fontWeight :'bold' , fontSize :18}}>N2,000</Text>
        </View>
      </View>
      <View style={{marginTop  : 10}}>
        <TouchableOpacity
         onPress={()=>navigation.navigate('PayementMethod')}
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
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deliverysummary;

const styles = StyleSheet.create({});
