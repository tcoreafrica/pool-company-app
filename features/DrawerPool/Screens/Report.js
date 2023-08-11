import {
  Image,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const Report = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: "white", marginHorizontal: 10  }}>
      <Text style={{ paddingVertical: 50, fontWeight: "bold", fontSize: 18 }}>
        Describe your issue
      </Text>
      <TextInput
        placeholder="Type your issue"
        style={{ height: 200, paddingVertical: 50  , backgroundColor : '#E6E6E6'}}
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontVariant: "bold", fontSize: 16 }}>
          Add screenshots (Optional)
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#E8F0FE",
            borderRadius: 10,
            marginVertical: 20,
            marginHorizontal: 10,
          }}
          onPress={pickImage}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 110, height: 110 }}
            />
          ) : (
            <Image
              style={{ alignSelf: "center", marginVertical: 45 }}
              source={require("../../../assets/plus.png")}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#E8F0FE",
            borderRadius: 10,
            marginVertical: 20,
            marginHorizontal: 10,
          }}
        >
          <Image
            style={{ alignSelf: "center", marginVertical: 45 }}
            source={require("../../../assets/plus.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#E8F0FE",
            borderRadius: 10,
            marginVertical: 20,
            marginHorizontal: 10,
          }}
        >
          <Image
            style={{ alignSelf: "center", marginVertical: 45 }}
            source={require("../../../assets/plus.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 52,
          backgroundColor: "#053582",
          borderRadius: 15,
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            paddingVertical: 10,
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({});
