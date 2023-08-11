import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const About = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}
    >
      <View style={{ alignSelf: "center", marginVertical: 15 }}>
        <Image source={require("../../../assets/LogisticsPro.png")} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          Logistics Pro is the world’s leading local delivery platform where
          users experience seamless placement of pickup and delivery of their
          items, gifts, packages, etc.
        </Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          We work with a large global ecosystem of riders, restaurants, shops
          and partners. From prepared meals to groceries, flowers, coffee,
          medicine… our fleets deliver whatever you need – fast, easy and to
          your door.
        </Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          Logistics Pro is the world’s leading local delivery platform where
          users experience seamless placement of pickup and delivery of their
          items, gifts, packages, etc.
        </Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          We work with a large global ecosystem of riders, restaurants, shops
          and partners. From prepared meals to groceries, flowers, coffee,
          medicine… our fleets deliver whatever you need – fast, easy and to
          your door.
        </Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          Logistics Pro is the world’s leading local delivery platform where
          users experience seamless placement of pickup and delivery of their
          items, gifts, packages, etc.
        </Text>
      </View>
      <View style={{ marginVertical: 10, alignSelf: "center" }}>
        <Image source={require("../../../assets/RiderMoto.png")} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          We work with a large global ecosystem of riders, restaurants, shops
          and partners. From prepared meals to groceries, flowers, coffee,
          medicine… our fleets deliver whatever you need – fast, easy and to
          your door.
        </Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          We work with a large global ecosystem of riders, restaurants, shops
          and partners. From prepared meals to groceries, flowers, coffee,
          medicine… our fleets deliver whatever you need – fast, easy and to
          your door.
        </Text>
      </View>
      <View>
        <Text>
          Logistics Pro is the world’s leading local delivery platform where
          users experience seamless placement of pickup and delivery of their
          items, gifts, packages, etc. We work with a large global ecosystem of
          riders, restaurants, shops and partners. From prepared meals to
          groceries, flowers, coffee, medicine… our fleets deliver whatever you
          need – fast, easy and to your door.
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({});
