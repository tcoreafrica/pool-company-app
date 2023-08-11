import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SupportIcon from "../../../constants/SupportIcon";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Support = ({ navigation }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={{ alignSelf: "center", marginVertical: 30 }}>
        <SupportIcon />
      </View>
      <View>
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>
          We would like to hear from you.
        </Text>
      </View>
      <TouchableOpacity style={{ marginVertical: 40, flexDirection: "row" }}>
        <Ionicons name="call" size={27} color="black" />
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginVertical: 40, flexDirection: "row" }}>
        <AntDesign name="questioncircle" size={28} color="black" />
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Report")}
        style={{ marginVertical: 40, flexDirection: "row" }}
      >
        <Octicons name="report" size={26} color="black" />
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Report an issue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        style={{ marginVertical: 40, flexDirection: "row" }}
      >
        <AntDesign name="infocirlce" size={27} color="black" />
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>About App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({});
