import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from 'react'

const VerifyPassword = ({navigation}) => {
  return (
    <View
    style={{
      paddingHorizontal: 20,
      backgroundColor: "white",
      flex: 1,
      paddingVertical: 60,
    }}
  >
    <View style={{}}>
      <Text style={{ paddingVertical: 12, fontWeight: "bold" }}>
      Enter the 6-digit code sent to you at:
      </Text>
      <Text style={{ marginBottom: 14 }}>
      johndoe@gmail.com
      </Text>
    </View>

    <View>
      

      <TouchableOpacity
        onPress={() => navigation.navigate("CreatePassword")}
        style={{
          padding: 12,

          backgroundColor: "#053582",
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
          }}
          
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: "#EBEBEB",
        position: "absolute",
        bottom: 5,
        borderRadius: 30,
        width: 100,
      }}
      onPress={()=>navigation.navigate('ForgotPassword')}
    >
      <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
    </TouchableOpacity>
    <View style={{flexDirection : "row" , justifyContent:"center"  , paddingTop : 20}}>
        <Text>Didn’t receive any code?</Text>
        <Text style={{color : 'blue'}}>  Resend</Text>
    </View>
  </View>
  )
}

export default VerifyPassword

const styles = StyleSheet.create({})