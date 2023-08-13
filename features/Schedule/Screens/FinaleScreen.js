import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PhaseLoso from "../../../constants/PhaseLogo";

const FinaleScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ alignSelf: "center"  , marginTop : 50 }}>
        <Image source={require("../../../assets/acceptedorder.png")} />
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 25,
            paddingVertical: 20,
            
          }}
        >
          Order Created Successfully!
        </Text>
      </View>
     
      
      
      <View style={{marginTop  : 120}}>
        <TouchableOpacity
        // onPress={()=>navigation.navigate('FinaleScreen')}
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
            Assign to rider
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical : 15}}>
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
          style={{ height: 40, backgroundColor: "white", borderRadius: 10 }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              paddingVertical: 7,
              fontSize: 17,
            }}
          >
            Go to company pool
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinaleScreen;

const styles = StyleSheet.create({});
