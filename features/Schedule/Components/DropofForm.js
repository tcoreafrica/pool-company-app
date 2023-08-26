import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";

const DropofForm = ({update}) => {
  const [dropOfName, setDropOfName] = useState("");
  const [dropOfPhoneNumber, setDropOfPhoneNumber] = useState("");

  const handleChangeName = (value) => {
    update(value, dropOfPhoneNumber);
    setDropOfName(value);
  };
  const handleChangeNumber = (value) => {
    update(dropOfName, value);
    setDropOfPhoneNumber(value);
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
        placeholder="dropOf Name"
        value={dropOfName}
        onChangeText={(text) => handleChangeName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Drop-off Phone number"
        value={dropOfPhoneNumber}
        onChangeText={(text) => handleChangeNumber(text)}
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

export default DropofForm;
