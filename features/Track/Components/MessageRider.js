import { View, Text } from 'react-native'
import React from 'react'

const MessageRider = () => {
  return (
    <View style={{}}>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>MessageRider</Text>
      <View style={{height : 1 , backgroundColor :'black' , marginVertical : 5}}></View>
      <View style={{paddingVertical : 5  , flexDirection :"row"}}>
        <View style={{height : 20 , width : 20 , backgroundColor :"#C4C4C4" , borderRadius : 10}}></View>
        <Text style={{fontWeight : '300' , paddingLeft : 5}}>I’m on my way now.</Text>
      </View>
      <View style={{paddingVertical : 5 , flexDirection :"row"  , paddingLeft : "45%"}}>
      <Text style={{fontWeight : '300' }}>Alright, thanks, I’ll be waiting</Text>
      <View style={{height : 20 , width : 20 , backgroundColor :"#053582" , marginLeft : 5,borderRadius : 10 ,}}></View>
        
      </View>
      <View style={{height : 1 , backgroundColor :'black' , marginVertical : 5}}></View>
    </View>
  )
}

export default MessageRider