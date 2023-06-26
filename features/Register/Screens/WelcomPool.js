import { StyleSheet, Text, View   , Image , TouchableOpacity} from 'react-native'
import React from 'react'

const WelcomPool = () => {
  return (
    <View style={{  alignItems : 'center', backgroundColor :'white' , width : '100%' , height : '100%' , justifyContent :'center'}}>
      <Image source={require('../../ForgotPassword/Assets/capture.png')}/>
      <Text style={{fontWeight : "bold" , fontSize : 26}}>Welcome to Pool</Text>
      <Text>Setting up your account</Text>
      <TouchableOpacity
        
        style={{
          backgroundColor: "#053582",
          position :'absolute',
          bottom : 30,
          borderRadius: 30,
          width: 100,
        }}
      >
        <Text style={{ padding: 10, alignSelf: "center" , color :'white' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomPool

const styles = StyleSheet.create({})