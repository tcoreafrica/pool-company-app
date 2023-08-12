import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../../Riders/Components/SearchBar";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";

import { Image } from "react-native";
import BlueDelivry from "../../../constants/BlueDelivry";
import DelivryRider from "../../Track/Components/DelivryRider";
import DelivryRiderLogo from "../../../constants/DelivryRiderLogo";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const DelivryHistory = ({navigation}) => {
  const [searchText, setSearchText] = useState("");
  const renderItem = () => (
    <TouchableOpacity 
    onPress={()=>navigation.navigate('DeliveryDetails')}
    style={{marginTop : 20}}>
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
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image
          source={require("../../../assets/Rider.png")}
          style={{ alignSelf: "center" }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" , paddingHorizontal : 10 , paddingVertical : 10}}>
        <View style={{position :'absolute' , top : 10 , left : 0 }}>
            <DelivryRiderLogo />
        </View>
        
        <View style={{paddingLeft : 35}}>
            <Text style={{  fontSize: 18 }}>Simeon Tee</Text>
            <Text style={{fontWeight :'300'}}>XKYBYD223</Text>
        </View>
        <View
          style={{
            height: 30,
            borderRadius: 15,
            
            
            marginTop : 5
          }}
        >
          <Text style={{ paddingHorizontal: 20, paddingVertical: 4 , color :'#00CE2D' , fontWeight :'bold' , fontSize : 16}}>
          Status: Delivered
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const handleSearchChange = (text) => {
    setSearchText(text);
    // Perform your search logic here
  };
  return (
    <ScrollView style={{ paddingHorizontal: 15, flex: 1, backgroundColor: "white" }}>
      <View>
        <SearchBar
          placeholder="Search..."
          onChangeText={handleSearchChange}
          value={searchText}
        />
      </View>
      <View>
        <FlatList
          data={dummydata2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default DelivryHistory;

const styles = StyleSheet.create({});
