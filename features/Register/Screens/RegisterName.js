import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const RegisterName = ({navigation}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 60,
      }}
    >
      <TouchableOpacity
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 14, paddingLeft: 8 }}>
          Company Name
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 14, paddingLeft: 8 }}>
          Enter your location
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 14, paddingLeft: 8 }}>
          Select a category
        </Text>
      </TouchableOpacity>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}>
          Who will be your company representative{" "}
        </Text>
        <Text>Enter the details of your contact person</Text>
      </View>
      <TouchableOpacity
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 14, paddingLeft: 8 }}>
          First name
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 14, paddingLeft: 8 }}>
          Last name
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection : "row" , justifyContent : 'space-between' , position :'absolute' , bottom : 10 , width :'100%'  , left : 15}}>
      <TouchableOpacity
        style={{
          backgroundColor: "#EBEBEB",
          
          borderRadius: 30,
          width: 100,
        }}
        onPress={()=>navigation.goBack()}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>navigation.navigate('RegisterPassword')}
        style={{
          backgroundColor: "#053582",
          
          borderRadius: 30,
          width: 100,
        }}
      >
        <Text style={{ padding: 10, alignSelf: "center" , color :'white' }}>Continue</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default RegisterName;

const styles = StyleSheet.create({});
