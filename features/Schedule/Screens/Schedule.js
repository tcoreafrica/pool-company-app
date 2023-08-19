import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import AddressForm from "../Components/AddressForm";
import Distance from "../../../constants/Distance";
import Fromto from "../../../constants/Fromto";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
const data = [
  {
    id: "1",
    title: "Image 1",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: "2",
    title: "Image 2",
    imageUrl: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    id: "3",
    title: "Image 3",
    imageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  // Add more items as needed
];

const Schedule = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <StatusBar style="auto" />
      <View style={{ backgroundColor: "red" }}>
        <AddressForm />
      </View>
      <View style={{ flexDirection: "row" , paddingHorizontal : 15}}>
        <Fromto />
        <Text style={{ paddingLeft: 8 }}>Estimated distance:</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15  , paddingHorizontal : 15 }}>
        <Distance height={30} />
        <Text
          style={{
            color: "#053582",
            fontWeight: "bold",
            fontSize: 20,
            paddingLeft: 5,
          }}
        >
          50km
        </Text>
      </View>
      <View style={{paddingHorizontal : 15 }}>
        <Text>Select Delivery Type:</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 15,
            justifyContent: "space-between",
            backgroundColor:'#EBEBEB',
            marginVertical : 5,
            paddingHorizontal : 10
          }}
        >
          <Text>Express:</Text>
          <Text>N2,000</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 15,
            justifyContent: "space-between",
            backgroundColor:'#EBEBEB',
            marginVertical : 5,
            paddingHorizontal : 10
          }}
        >
          <Text>Express:</Text>
          <Text>N2,000</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 15,
            justifyContent: "space-between",
            backgroundColor:'#EBEBEB',
            paddingHorizontal : 10,
            marginVertical : 5
          }}
        >
          <Text>Express:</Text>
          <Text>N2,000</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop  : 10}}>
        <TouchableOpacity
         onPress={()=>navigation.navigate('Deliverysummary')}
          style={{ height: 40, backgroundColor: "#053582", borderRadius: 10 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              alignSelf: "center",
              paddingVertical: 7,
              fontSize: 17,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: "white",
    paddingTop: 20,
  },
  itemContainer: {
    marginRight: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
