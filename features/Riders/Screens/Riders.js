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
import { Rider } from "../Components/Rider";
const Riders = ({ route }) => {
  const [riders, setRiders] = useState([]);
  const navigation = useNavigation();
  const poolId = route?.params;
  const goToDetails = (_id) => {
    navigation.navigate("RiderDetails", { _id, poolId });
  };

  useEffect(() => {
    getAllRiders().then((res) => setRiders(res.data));
  }, []);
 
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

      {riders.map((rider, index) => (
        <Rider rider={rider} key={index} navigation={navigation} poolId={poolId}/>
      ))}
    </View>
  );
};

export default Riders;

const styles = StyleSheet.create({});
