import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AddressForm from "../Components/AddressForm";
import PickupForm from "../Components/PickupForm";
import DropofForm from "../Components/DropofForm";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

const Deliverysummary = ({ navigation }) => {
  const [packagetype, setPackagetype] = useState("");
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      <View style={{ height : 50 , marginTop : 10 , marginHorizontal : 15}}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal : 10,
            marginBottom: 6,
            backgroundColor: "#EBEBEB",  
          }}
          placeholder="Package type"
          value={packagetype}
          onChangeText={(text) => setPackagetype(text)}
        />
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
      <View style={{ height: 65, marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Delivery Type:</Text>
          <Text>Delivery Type:</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#053582", fontWeight: "bold", fontSize: 18 }}>
            Express:
          </Text>
          <Text style={{ color: "#053582", fontWeight: "bold", fontSize: 18 }}>
            N2,000
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PayementMethod")}
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
