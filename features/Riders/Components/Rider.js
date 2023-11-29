import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AddressTextFromCoordinates } from "../../../serveur/helper";
import { pushDeliveryToRider } from "../../../serveur/pools/pool";
export const Rider = ({ rider, navigation, poolId }) => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const goToDetails = (_id) => {
    poolId ? null : navigation.navigate("RiderDetails", { _id, address });
  };

  useEffect(() => {
    AddressTextFromCoordinates(rider.address[0], rider.address[1]).then(
      (res) => {
        setAddress(res);
      }
    );
  }, []);

  const handleAssignRider = (id) => {
    setLoading(true);
    pushDeliveryToRider({
      poolId: poolId,
      riderId: id,
    }).then((res) => {
      setLoading(false);
      console.log(res)
      if (res <= 201) {
        navigation.navigate("Success");
      }
    });
  };

  return (
    <TouchableOpacity
      onPress={() => goToDetails(rider.account)}
      style={{
        height: "100%",
        flex: 1,
        borderRadius: 2,
        elevation: 0.5, // Add shadow for Android (higher values for stronger shadow)
        // shadowColor: "#000000", // Add shadow for iOS
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.05,
        // shadowRadius: 2,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 6,
        paddingLeft: 60,
      }}
    >
      <View style={{}}>
        <Image
          source={
            rider?.profilePhoto
              ? rider.profilePhoto
              : {
                  uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                }
          }
          style={{
            height: 40,
            width: 40,
            position: "absolute",
            borderRadius: 20,
            left: -50,
            top: 20,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 3 }}>
          {rider.firstName + " " + rider.lastName}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, paddingRight: 5 }}>
            {rider.rating}
          </Text>
          <AntDesign name="star" size={19} color="black" />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ paddingBottom: 3 }}>{rider.nbr_delivries}</Text>
        {/* <TouchableOpacity
style={{ backgroundColor: "#053582", borderRadius: 8 , height : 21 , width :51}}
>
<Text style={{ alignSelf: "center" , color : 'white'}}>Assign</Text>
</TouchableOpacity> */}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Entypo
            name="location-pin"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 16, width: "70%" }}>
            {address}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#053582",
            borderRadius: 8,
            height: 25,
            width: 60,
          }}
          onPress={() => poolId&&handleAssignRider(rider.account)}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: "700",
                padding: 2,
              }}
            >
              Assign
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
