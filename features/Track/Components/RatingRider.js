import { View, Text } from 'react-native'
import React from 'react'

const RatingRider = () => {
  return (
    <View>
        <View style={{flexDirection : "row" , justifyContent : 'space-between' , paddingVertical : 5}}>
            <Text style={{fontWeight :'300'}}>Rider rating:</Text>
        </View>
      <Text style={{fontWeight :'700' , fontSize : 16 , paddingVertical : 5}}>Note:</Text>
      <Text style={{ fontSize : 14 }}>Nice and swift rider, good character and smart delivery. Thumbs up.</Text>
    </View>
  )
}

export default RatingRider