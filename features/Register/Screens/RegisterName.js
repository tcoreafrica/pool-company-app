import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLEKEY } from "@env";

const RegisterName = ({ navigation }) => {
  const [inputHeight, setInputHeight] = useState(50); // Initial height
  const [location, setLoaction] = useState(null);
  const [nameCompany, setNameCompany] = useState("");
  const [EmailCompany, setEmailCompany] = useState("");
  const [firstNameUser, setFirstNameUser] = useState("");
  const [lastNameUser, setLastNameUser] = useState("");

  const handleSubmit = () => {
    navigation.navigate("RegisterPassword", {
      nameCompany,
      EmailCompany,
      location,
      firstNameUser,
      lastNameUser,
    });
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 60,
      }}
    >
      <TextInput
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
        onChangeText={setNameCompany}
        placeholder=" Company Name"
      />
      <TextInput
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
        onChangeText={setEmailCompany}
        placeholder=" Company Email"
      />

      <View style={{ height: inputHeight }}>
        <GooglePlacesAutocomplete
          placeholder="your location"
          onPress={(data, details = null) => {
            setLoaction([
              details.geometry.location.lat,
              details.geometry.location.lng,
            ]);
          }}
          fetchDetails={true}
          query={{
            key: GOOGLEKEY,
            language: "en",
          }}
          styles={inputStyles}
          onFail={(error) => console.error(error)}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
          textInputProps={{
            onFocus: () => {
              // Increase the input height when focused
              setInputHeight(200); // Adjust the height as needed
            },
            onBlur: () => {
              // Restore the input height when blurred
              setInputHeight(50); // Back to the initial height
            },
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}>
          Who will be your company representative{" "}
        </Text>
        <Text>Enter the details of your contact person</Text>
      </View>
      <TextInput
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
        onChangeText={setFirstNameUser}
        placeholder="First name"
      />

      <TextInput
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
        onChangeText={setLastNameUser}
        placeholder=" Last name"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 10,
          width: "100%",
          left: 15,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#EBEBEB",

            borderRadius: 30,
            width: 100,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: "#053582",

            borderRadius: 30,
            width: 100,
          }}
        >
          <Text style={{ padding: 10, alignSelf: "center", color: "white" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterName;

const styles = StyleSheet.create({});
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
