import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Card = ({navigation}) => {
  return (
    <View style={{flex : 1 , backgroundColor: "white"  , paddingHorizontal : 15 }}>
      <View style={{flexDirection :'row' , justifyContent :'space-between' , marginVertical : 20  ,paddingHorizontal : 10}}>
        <Text>4 Cards</Text>
        <TouchableOpacity>
        <Text>New</Text>
        </TouchableOpacity>
       
      </View>
      
      <TouchableOpacity
      onPress={() => navigation.navigate("OrderAcceptedFinale")}
      >
        <Image source={require('../../../assets/card.png')} style={{alignSelf :'center'}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})