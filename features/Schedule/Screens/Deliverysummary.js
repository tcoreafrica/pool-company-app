import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AddressForm from "../Components/AddressForm";
import PickupForm from "../Components/PickupForm";
import DropofForm from "../Components/DropofForm";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

const Deliverysummary = ({ navigation, route }) => {
  const [packagetype, setPackagetype] = useState("");

  const { dropOffAddress, pickupAddress } = route.params;
  const [dropInfo, setDropInfo] = useState("");
  const [pickInfo, setPickInfo] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
    >
      <View style={{ height: 50, marginTop: 10, marginHorizontal: 15 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 6,
            height: 30,
            // backgroundColor: "#EBEBEB",
          }}
          placeholder="Package type"
          value={packagetype}
          onChangeText={(text) => setPackagetype(text)}
        />
      </View>
      <View style={{ backgroundColor: "white", marginTop: 20 }}>
        <Text>Product</Text>
        <TextInput
          style={styles.product}
          placeholder="Product name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          keyboardType="decimal-pad"
          style={styles.product}
          placeholder="Product quantity"
          value={quantity}
          onChangeText={setQuantity}
        />
      </View>

      <View style={{ backgroundColor: "white", marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Pickup</Text>
        </View>

        <PickupForm update={(name, number) => setPickInfo({ name, number })} />
      </View>
      <View style={{ backgroundColor: "white", marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Dropoff</Text>
        </View>

        <DropofForm update={(name, number) => setDropInfo({ name, number })} />
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
          // onPress={() => console.log(pickInfo)}
          onPress={() =>
            navigation.navigate("PayementMethod", {
              pickInfo,
              dropInfo,
              dropOffAddress,
              pickupAddress,
              itemName,
              quantity,
            })
          }
          disabled={
            pickInfo == "" || dropInfo == "" || quantity == "" || itemName == ""
          }
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
    </ScrollView>
  );
};

export default Deliverysummary;

const styles = StyleSheet.create({
  product: {
    backgroundColor: "#EBEBEB",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 6,
    height: 40,
    width: "90%",
    marginLeft: 20,

    // backgroundColor: "#EBEBEB",
  },
});
