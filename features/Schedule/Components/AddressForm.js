import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";

const AddressForm = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropOffAddress, setDropOffAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        Enter Pickup and Dropoff
      </Text>
      <View style={{position :'absolute' , bottom : 30  ,left : 3}}>
        <Image source={require('../../../assets/fromto.png')}/>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Pickup Address"
        value={pickupAddress}
        onChangeText={(text) => setPickupAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Drop-off Address"
        value={dropOffAddress}
        onChangeText={(text) => setDropOffAddress(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 14,
    height: 180,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#EBEBEB",
    marginLeft : 5
  },
});

export default AddressForm;
