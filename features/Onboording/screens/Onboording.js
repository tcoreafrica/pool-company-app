import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { dummyData } from "../data/data";
import {useWindowDimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Onboording = ({ navigation }) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={{ alignSelf: "center", backgroundColor: "#184B9C" }}>
      <StatusBar hidden={true} />
      <FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={{  alignSelf: "center" , width }}>
            <Image
              source={require('../Assets/ONBORD2.png')}
              style={{
                height : 400,
                resizeMode :"contain",
                justifyContent: "center",
                alignItems : "center",
              
              }}
            />
            <View style={{ }}>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 20,
                  marginTop: 20,
                  paddingHorizontal: 10,
                  color: "white",
                  
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
        horizontal
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcom1")}
        style={{
          padding: 12,
          position: "absolute",
          bottom: 50,
          width: "100%",
          backgroundColor: "#053582",
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcom1")}
        style={{
          height: 40,
        }}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontWeight: "bold",
            position: "absolute",
            bottom: 20,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboording;

const styles = StyleSheet.create({});
