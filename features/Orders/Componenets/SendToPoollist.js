import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import { useNavigation } from "@react-navigation/native";

const SendToPoollist = ({}) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
       
      style={{
        height: 80,
        flex: 1,
        borderRadius: 2,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 6,
        paddingLeft: 40,
        elevation: 1,
      }}
    >
      <View style={{ position: "absolute", top: 17, left: 15 }}>
        <PhaseLoso />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.from}</Text>
        <AntDesign name="arrowright" size={24} color="black" />
        <Text style={{ fontSize: 12 }}>{item.to}</Text>
        <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
      </View>
      <View style={{ flexDirection: "row"  }}>
        <View style={{ flexDirection: "row"  , paddingRight  : 30}}>
          <TimeLogo style={{ marginVertical: 3 }} />
          <Text style={{ paddingLeft: 5 }}>{item.date}</Text>
        </View>

        <View style={{ flexDirection: "row" , marginHorizontal : 30}}>
          <TimeLogo style={{ marginVertical: 3 }} />
          <Text style={{ paddingLeft: 5, color: "red" }}>Express</Text>
          <TouchableOpacity 
           onPress={() => navigation.navigate("PushOrder")}
          style={{height : 30,borderRadius : 5 , backgroundColor :'#053582'  , marginHorizontal : 60}}>
            <Text style={{fontWeight :'bold' , color :'white' , paddingVertical : 5 , paddingHorizontal : 5}}>Send to pool</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={dummydata2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default SendToPoollist;

const styles = StyleSheet.create({});
