import { View, Text } from 'react-native'
import React from 'react'

const MessageRider = () => {
  return (
    <View style={{}}>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>MessageRider</Text>
      <View style={{height : 1 , backgroundColor :'black' , marginVertical : 5}}></View>
      <View style={{paddingVertical : 5}}>
        <Text style={{fontWeight : '300'}}>I’m on my way now.</Text>
      </View>
      <View style={{paddingVertical : 5}}>
        <Text style={{fontWeight : '300' , paddingLeft : "50%"}}>Alright, thanks, I’ll be waiting</Text>
      </View>
      <View style={{height : 1 , backgroundColor :'black' , marginVertical : 5}}></View>
    </View>
  )
}

export default MessageRider