import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import GoogleLogo from "../Assests/GoogleLogo";
import ForgotPassword from "../../ForgotPassword/Screnns/ForgotPassword";

const Welcom1 = ({ navigation }) => {
  const [email,setEmail]=useState('')
  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: "white", flex: 1 , paddingVertical : 60 }}>
      <View style={{}}>
      <Text style={{ paddingVertical: 12, fontWeight: "bold" }}>
        What’s your email or phone number
      </Text>
      </View>
      
      <View>
      <TextInput
      onChangeText={setEmail}
        style={{
          padding: 12,
          marginBottom : 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
        placeholder="Enter email or phone number"
      />
        
 
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcom2",{email})}
        style={{
          padding: 12,

          backgroundColor: "#053582",
          borderRadius: 30,
        }}
        disabled={email==''}
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
      <View style={{height : 1 , backgroundColor : 'black' , marginTop : 20}}>

      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('RegisterName')}
      style={{ flexDirection : 'row'  , alignSelf :'center'}}>
        <GoogleLogo height={100} style={{}}/>
        <Text style={{alignSelf :'center' , paddingLeft : 10 , fontSize : 20}}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginBottom : 20}} onPress={()=>navigation.navigate(ForgotPassword)}>
        <Text style={{alignSelf : 'center'}}>Forgot password</Text>
      </TouchableOpacity>
      <View>
        <Text>By proceeding, you consent to get calls, whatsapp or sms messages and agree to the terms of services & privacy policy of Paakej.</Text>
      </View>
      <TouchableOpacity style={{backgroundColor : '#EBEBEB' , position : "absolute" , bottom : 5, borderRadius : 30 , width : 100 }}>
        <Text style={{padding : 10 , alignSelf : "center"}}>Back</Text>
      </TouchableOpacity> 
      
    </View>
  );
};

export default Welcom1;

const styles = StyleSheet.create({});
