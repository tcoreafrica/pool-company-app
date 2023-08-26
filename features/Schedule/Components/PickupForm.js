import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";

const PickupForm = ({ update }) => {
  const [pickupName, setPickupName] = useState("");
  const [pickUpPhoneNumber, setPickUpPhoneNumber] = useState("");

  const handleChangeName = (value) => {
    update(value, pickUpPhoneNumber);
    setPickupName(value);
  };
  const handleChangeNumber = (value) => {
    update(pickupName, value);
    setPickUpPhoneNumber(value);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        14B Wole Ariyo Street, Lekki Phase 1, Lagos
      </Text>
      <View style={{ position: "absolute", bottom: 30, left: 3 }}>
        <Image source={require("../../../assets/fromto.png")} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type in correct name"
        value={pickupName}
        onChangeText={handleChangeName}
      />
      <TextInput
        style={styles.input}
        placeholder="Type in phone number"
        value={pickUpPhoneNumber}
        onChangeText={handleChangeNumber}
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
    marginLeft: 5,
  },
});

export default PickupForm;
