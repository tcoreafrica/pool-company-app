import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BlueDelivry from "../../../constants/BlueDelivry";
import DelivryRider from "../Components/DelivryRider";
import MessageRider from "../Components/MessageRider";
import RatingRider from "../Components/RatingRider";
import { ScrollView } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import ProgressBar from "../Components/ProgressBar";
import ProgressBarCmp from "../Components/ProgressBar";
import { Image } from "react-native";

const DeliveryDetails = () => {
  const origin = { latitude: 37.78825, longitude: -122.4324 };
  const destination = { latitude: 37.7749, longitude: -122.4194 };
  return (
    <ScrollView
      style={{ paddingHorizontal: 10, flex: 1, backgroundColor: "white" }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <BlueDelivry style={{ paddingVertical: 12 }} />
          <Text
            style={{
              color: "#053582",
              fontWeight: "bold",
              paddingLeft: 8,
              fontSize: 17,
            }}
          >
            DeliveryDetails
          </Text>
        </View>

        <View>
          <Text style={{ fontWeight: "400" }}>18 June, 20</Text>
          <Text style={{ alignSelf: "center" }}>02:29PM</Text>
        </View>
      </View>

      <View
        style={{
          height: 220,
          backgroundColor: "red",
          marginVertical: 10,
          borderRadius: 15,
        }}
      >
        <MapView
          style={{ flex: 1, borderRadius: 50 }}
          initialRegion={{
            latitude: (origin.latitude + destination.latitude) / 2,
            longitude: (origin.longitude + destination.longitude) / 2,
            latitudeDelta: Math.abs(origin.latitude - destination.latitude) * 2,
            longitudeDelta:
              Math.abs(origin.longitude - destination.longitude) * 2,
          }}
        >
          <Marker coordinate={origin} title="Origin" />
          <Marker coordinate={destination} title="Destination" />

          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={"AIzaSyCGPY_hsHcarYRmtuyvZCTOyoRWGN7-JGA"}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        </MapView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
          marginVertical: 5,
        }}
      >
        <View style={{ flex: 0.5, marginHorizontal: 5 }}>
          <Text style={{ paddingVertical: 5 }}>
            14B Wole Ariyo Street, Lekki Phase 1,
          </Text>
          <Text style={{ color: "#92929D" }}>Lekki</Text>
        </View>
        <View style={{ flex: 0.5, marginHorizontal: 5 }}>
          <Text style={{ paddingVertical: 5 }}>
            14B Wole Ariyo Street, Lekki Phase 1,
          </Text>
          <Text style={{ color: "#92929D" }}>Lekki</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex : 1 }}>
        <Image source={require('../../../assets/Rider.png')} style={{alignSelf :'center'}}/>
      </View>
      <View style={{ height: 70 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Delivery Successful!
        </Text>
        <Text>Arrived at 10:40pm</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <ProgressBarCmp />
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

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
