import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const OnboordingItem = ({ item }) => {
  return (
    <View style={{ flex: 1, alignSelf: "center" }}>
      <Image
        source={item.image}
        style={{
          flex: 0.7,
          justifyContent: "center",
          width: "100%",
          resizeMode: "contain",
        }}
      />
      <View style={{ flex: 0.3 }}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 28,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 28,
            marginBottom: 20,
            paddingHorizontal: 64,
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnboordingItem;

const styles = StyleSheet.create({});
