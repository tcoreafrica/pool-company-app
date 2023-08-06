import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import { dummydata } from "../../../data/dummydata";
import { TouchableOpacity, Image } from "react-native";

import { Entypo } from "@expo/vector-icons";
import RiderDetails from "./RiderDetails";
import { useNavigation } from "@react-navigation/native";

const Riders = () => {
  const navigation = useNavigation()
  const goToDetails = () =>{
    navigation.navigate("RiderDetails")
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={goToDetails}
      style={{
        height: 91,
        flex: 1,
        borderRadius: 5,
        elevation: 3, // Add shadow for Android (higher values for stronger shadow)
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
          source={item.img}
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
          {item.name}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.rating}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ paddingBottom: 3 }}>{item.nbr_delivries}</Text>
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
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.location}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#053582",
            borderRadius: 8,
            height: 25,
            width: 60,
          }}
        >
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
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Riders</Text>
        <TouchableOpacity>
          <Icon name="search" size={18} style={{}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 20 }}>All</Text>
        <TouchableOpacity>
          <Icon name="filter" size={18} style={{}} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={dummydata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={{}}
      />
    </View>
  );
};

export default Riders;

const styles = StyleSheet.create({});
