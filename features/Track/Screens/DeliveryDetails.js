import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BlueDelivry from "../../../constants/BlueDelivry";
import DelivryRider from "../Components/DelivryRider";
import MessageRider from "../Components/MessageRider";
import RatingRider from "../Components/RatingRider";
import { ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

const DeliveryDetails = () => {
  return (
    <ScrollView
      style={{ paddingHorizontal: 10, flex: 1, backgroundColor: "white" }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <BlueDelivry />
          <Text
            style={{ color: "#053582", fontWeight: "bold", paddingLeft: 8 }}
          >
            DeliveryDetails
          </Text>
        </View>

        <View>
          <Text>18 June, 20</Text>
          <Text>02:29PM</Text>
        </View>
      </View>

      <View
        style={{
          height: 220,
          backgroundColor: "red",
          marginVertical: 10,
          borderRadius: 10,
        }}
      >
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ flex: 1 }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View
          style={{ flex: 0.5, marginHorizontal: 5 }}
        >
          <Text style={{ paddingVertical: 5 }}>
            14B Wole Ariyo Street, Lekki Phase 1,
          </Text>
          <Text style={{ color: "#92929D" }}>Lekki</Text>
        </View>
        <View
          style={{ flex: 0.5, marginHorizontal: 5 }}
        >
          <Text style={{ paddingVertical: 5 }}>
            14B Wole Ariyo Street, Lekki Phase 1,
          </Text>
          <Text style={{ color: "#92929D" }}>Lekki</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", height: 30 }}></View>
      <View style={{ height: 70 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Delivery Successful!
        </Text>
        <Text>Arrived at 10:40pm</Text>
      </View>
      <View style={{}}>
        <DelivryRider />
        <MessageRider />
        <RatingRider />
      </View>
    </ScrollView>
  );
};

export default DeliveryDetails;

const styles = StyleSheet.create({});
