import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView } from "react-native";
import { Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";
import FromtoImg from "../../../constants/FromtoImg";
import MarkerLogo from "../../../constants/MarkerLogo";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLEKEY } from "@env";
const AddressForm = ({ handleChangeLocation }) => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropOffAddress, setDropOffAddress] = useState("");
 

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <MarkerLogo />
        <Text style={{ fontWeight: "bold", marginBottom: 10, paddingLeft: 8 }}>
          Enter Pickup and Dropoff
        </Text>
      </View>

      <View style={{ position: "absolute", bottom: 40, left: 3 }}>
        <Image source={require("../../../assets/fromto.png")} />
      </View>
      {/* <View style={{   }}> */}
      <GooglePlacesAutocomplete
        placeholder="Pickup Address"
        onPress={(data, details = null) => {
          setPickupAddress(details.geometry.location);
          handleChangeLocation({pickupAddress:details.geometry.location, dropOffAddress:dropOffAddress});
        }}
        fetchDetails={true}
        query={{
          key: GOOGLEKEY,
          language: "en",
        }}
        styles={inputStyles}
        onFail={(error) => console.error(error)}
        nearbyPlacesAPI="GooglePlacesSearch"
      />
      <GooglePlacesAutocomplete
        placeholder="Drop-off Address"
        onPress={(data, details = null) => {
          setDropOffAddress(details.geometry.location);
          handleChangeLocation({pickupAddress:pickupAddress, dropOffAddress:details.geometry.location});

        }}
        query={{
          key: GOOGLEKEY,
          language: "en",
        }}
        styles={inputStyles}
        fetchDetails={true}
        onFail={(error) => console.error(error)}
        nearbyPlacesAPI="GooglePlacesSearch"
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
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
    marginLeft: 18,
  },
});
const inputStyles = {
  textInputContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    marginLeft: 30,
    marginRight: 0,
    height: 38,
    color: "#5d5d5d",
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: "#1faadb",
  },
};
export default AddressForm;
