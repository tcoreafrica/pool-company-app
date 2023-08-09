import { View, Text } from "react-native";
import React from "react";
import ProfileLogo from "../../../constants/ProfileLogo";
import DelivryRiderLogo from "../../../constants/DelivryRiderLogo";

const DelivryRider = () => {
  return (
    <View style={{paddingTop : 10}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between"  , marginHorizontal : 5}}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>DelivryRider</Text>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>Cash : Paid</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" , paddingHorizontal : 10 , paddingVertical : 10}}>
        <View style={{position :'absolute' , top : 10 , left : 0 }}>
            <DelivryRiderLogo />
        </View>
        
        <View style={{paddingLeft : 35}}>
            <Text style={{  fontSize: 18 }}>Simeon Tee</Text>
            <Text style={{fontWeight :'300'}}>XKYBYD223</Text>
        </View>
        <View
          style={{
            height: 30,
            borderRadius: 15,
            borderColor: "#053582",
            borderWidth: 1,
          }}
        >
          <Text style={{ paddingHorizontal: 20, paddingVertical: 4 }}>
            Receipt
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DelivryRider;
