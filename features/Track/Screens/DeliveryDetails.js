import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
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
import { AddressTextFromCoordinates } from "../../../serveur/helper";

const DeliveryDetails = ({ route }) => {
  const data = route.params;
  const [locationFrom, setLocationFrom] = useState(data.destinationLocation);
  const [locationTo, setLocationTo] = useState(data.destinationLocation);

  useEffect(() => {
    AddressTextFromCoordinates(
      data.pickUpLocation[0],
      data.pickUpLocation[1]
    ).then((res) => {
      setLocationFrom(res);
    });
    AddressTextFromCoordinates(
      data.destinationLocation[0],
      data.destinationLocation[1]
    ).then((res) => {
      setLocationTo(res);
    });
  }, []);
  console.log(Object.keys(data.customer));

  const date = Date(data.date);
  const dateText = date.substring(0, date.length / 2);
  const timeText = date.substring(16, date.length - 12);
  const origin = {
    latitude: data.pickUpLocation[0],
    longitude: data.pickUpLocation[1],
  };
  const destination = {
    latitude: data.destinationLocation[0],
    longitude: data.destinationLocation[1],
  };
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
          <Text style={{ fontWeight: "400" }}>{dateText}</Text>
          <Text style={{ alignSelf: "center" }}>{timeText}</Text>
        </View>
      </View>

      <View
        style={{
          height: 220,
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
          <Text style={{ paddingVertical: 5, height: 70 }}>{locationFrom}</Text>
          <Text style={{ color: "#92929D" }}>{data.customer.name}</Text>
        </View>
        <View style={{ flex: 0.5, marginHorizontal: 5 }}>
          <Text style={{ paddingVertical: 5 }}>{locationTo}</Text>
          <Text style={{ color: "#92929D" }}>{data.receiver.name}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image
          source={require("../../../assets/Rider.png")}
          style={{ alignSelf: "center" }}
        />
      </View>
      <View style={{ height: 70 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {/* Delivery Successful! */}
        </Text>
        {/* <Text>Arrived at 10:40pm</Text> */}
        <Text>{data.status}</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <ProgressBarCmp />
      </View>
      <View style={{}}>
        <DelivryRider rider={data.customer}/>
        {/* <MessageRider /> */}
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
