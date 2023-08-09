import { View, Text } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";

const RatingRider = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontWeight: "400" , alignSelf :'center' , paddingRight : 5}}>Rider rating:</Text>
        <AirbnbRating
          count={5}
          reviews={[
            
            "Bad",
            
            "OK",
            "Good",
            
            "Very Good",
            
            "Unbelievable",
            
          ]}
          defaultRating={5}
          size={25}
          selectedColor="#424242"
          showRating ={false}
          
        />
      </View>
      <Text style={{ fontWeight: "700", fontSize: 16, paddingVertical: 5 }}>
        Note:
      </Text>
      <Text style={{ fontSize: 14 }}>
        Nice and swift rider, good character and smart delivery. Thumbs up.
      </Text>
    </View>
  );
};

export default RatingRider;
