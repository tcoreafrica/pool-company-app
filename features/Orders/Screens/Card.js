import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Card = ({navigation}) => {
  return (
    <View style={{flex : 1 , backgroundColor: "white"  , paddingHorizontal : 15 }}>
      <View style={{flexDirection :'row' , justifyContent :'space-between' , marginVertical : 20  ,paddingHorizontal : 10}}>
        <Text>4 Cards</Text>
        <Text>New</Text>
      </View>
      
      <TouchableOpacity
      onPress={()=>navigation.navigate('TopUpSuccess')}
      >
        <Image source={require('../../../assets/card.png')} style={{alignSelf :'center'}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})