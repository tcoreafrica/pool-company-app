import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from 'react'
import CodeInputCmp from "../../ForgotPassword/Components/CodeInput";


const VerifyEmail = ({navigation}) => {
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

    <View style={{ width : "100%"  }}>
      <CodeInputCmp />
    </View>
      
      <View style={{alignSelf : 'center'}}>
      <Text style={{fontWeight : 'bold' , fontSize : 18}}>120 s</Text>
      </View>

     
    </View>
    <View style={{flexDirection : "row" , justifyContent : 'space-between' , position :'absolute' , bottom : 10 , width :'100%'  , left : 15}}>
      <TouchableOpacity
        style={{
          backgroundColor: "#EBEBEB",
          
          borderRadius: 30,
          width: 100,
        }}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>navigation.navigate('WelcomPool')}
        style={{
          backgroundColor: "#053582",
          
          borderRadius: 30,
          width: 100,
        }}
      >
        <Text style={{ padding: 10, alignSelf: "center" , color :'white' }}>Continue</Text>
      </TouchableOpacity>
      </View>
    <View style={{flexDirection : "row" , justifyContent:"center"  , paddingTop : 20}}>
        <Text>Didn’t receive any code?</Text>
        <Text style={{color : 'blue'}}>  Resend</Text>
    </View>
  </View>
  )
}

export default VerifyEmail

const styles = StyleSheet.create({})