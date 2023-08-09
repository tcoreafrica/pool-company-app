import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../../Riders/Components/SearchBar";
import OrderFlatlist from "../Components/OrderFlatlist";

const Track = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (text) => {
    setSearchText(text);
    // Perform your search logic here
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "white"  , paddingVertical : 10}}>
      <View>
        <Text style={styles.textstyle}>Track your pending orders</Text>
      </View>
      <View style={{ paddingVertical : 10 }}>
        <SearchBar
          placeholder="Search..."
          onChangeText={handleSearchChange}
          value={searchText}
        />
      </View>
      <View>
        <Text style={styles.textstyle}>Orders</Text>
      </View>
      <View>
        <OrderFlatlist />
      </View>
    </View>
  );
};

export default Track;

const styles = StyleSheet.create({
  textstyle : {
    color :"#92929D" , 
    fontSize : 17,
    paddingHorizontal : 5
  }
});
