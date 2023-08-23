import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import { dummydata } from "../../../data/dummydata";
import { TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import RiderDetails from "./RiderDetails";
import { useNavigation } from "@react-navigation/native";
import getAllRiders from "../../../serveur/riders/riders";
const Riders = () => {
  const [riders, setRiders] = useState([]);
  const navigation = useNavigation();
  const goToDetails = (_id) => {
    navigation.navigate("RiderDetails", { _id });
  };
  useEffect(() => {
    getAllRiders().then((res) => setRiders(res.data));
  }, []);

  const renderItem = ({ item }) => (
     (
      <TouchableOpacity
        onPress={() => goToDetails(item.account)}
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
              !item?.profilePhoto  
                ? item.profilePhoto
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
            {item.firstName + " " + item.lastName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, paddingRight: 5 }}>
              {item.rating}
            </Text>
            <AntDesign name="star" size={19} color="black" />
          </View>
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
              {item.address[0]}
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
    )
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
        {/* <Text style={{ fontWeight: "bold", fontSize: 22 }}>Riders</Text>
        <TouchableOpacity>
          <Icon name="search" size={18} style={{}} />
        </TouchableOpacity> */}
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
        data={riders}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
        style={{}}
      />
    </View>
  );
};

export default Riders;

const styles = StyleSheet.create({});
