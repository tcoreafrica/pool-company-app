import React, { useState } from "react";
import { FlatList, Image, ScrollView } from "react-native";
import { Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";
import FromtoImg from "../../../constants/FromtoImg";
import MarkerLogo from "../../../constants/MarkerLogo";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const AddressForm = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropOffAddress, setDropOffAddress] = useState("");
  const GOOGLE_MAPS_APIKEY="AIzaSyCGPY_hsHcarYRmtuyvZCTOyoRWGN7-JGA"

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
      <View style={{ flex: 1, padding: 10, marginHorizontal : 5}}>
      <FlatList
        ListHeaderComponent={() => (
      <GooglePlacesAutocomplete
            placeholder="Pickup Address"

            onPress={(data, details = null) => {
              console.log(data , details);
            }}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            styles={inputStyles}
            onFail={error => console.error(error)}
            nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
          />
          )}
        data={[]} // You can provide data if needed
        keyExtractor={(item, index) => index.toString()}
      />
    
          
      
        
       <FlatList
        ListHeaderComponent={() => (
          <GooglePlacesAutocomplete
            placeholder="Drop-off Address"
            onPress={(data, details = null) => {
              console.log(data);
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            styles={inputStyles}
          />
        )}
        data={[]} // You can provide data if needed
        keyExtractor={(item, index) => index.toString()}
      /> 
      </View>
      {/* <TextInput
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
      /> */}
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
  }
});
const inputStyles = {
  textInputContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    
  },
  textInput: {
    marginLeft: 0,
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
