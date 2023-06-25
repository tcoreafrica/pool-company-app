import { StyleSheet, Text, View   , Image} from 'react-native'
import React from 'react'

const PasswordChanges = () => {
  return (
    <View style={{  alignItems : 'center', backgroundColor :'white' , width : '100%' , height : '100%' , justifyContent :'center'}}>
      <Image source={require('../Assets/capture.png')}/>
      <Text style={{fontWeight : "bold" , fontSize : 16}}>Password Changed Successfully!</Text>
    </View>
  )
}

export default PasswordChanges

const styles = StyleSheet.create({})