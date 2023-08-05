import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PoolLogo from "../../../constants/PoolLogo";
import CompanyOrderLogo from "../../../constants/CompanyOrderLogo";

const Dashbord = ({navigation}) => {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
      
      <View style={{  }}>
        <Text>Welcome Touchcore,</Text>
      </View>
      <View
        style={{
          backgroundColor: "#053582",
          marginTop: 20,
          height: 152,
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            marginBottom: 5,
            paddingTop: 5,
          }}
        >
          My Wallet:
        </Text>
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          N4,330.50
        </Text>
        <TouchableOpacity
          style={{
            height: 57,
            backgroundColor: "white",
            borderRadius: 12,
            marginHorizontal: 20,
            paddingTop: 15,
          }}
          onPress={() => navigation.navigate("Success")}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#053582",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Top up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View
          style={{ backgroundColor: "#E8F0FE", height: 150, width: "33.33%" }}
        >
          <Text style={{alignSelf :'center'}}>26</Text>
          <View style={{alignSelf :'center' , paddingVertical : 10}}>
          <PoolLogo />
          </View>
          
          <Text style={{alignSelf :'center'}}>Deliveries</Text>
          <Text style={{alignSelf :'center'}}>Pulled from pool</Text>
        </View>
        <View
          style={{ backgroundColor: "#00CE2D", height: 150, width: "33.33%" }}
        >
          <Text style={{alignSelf :'center'}}>26</Text>
          <View style={{alignSelf :'center' , paddingVertical : 10}}>
          <PoolLogo />
          </View>
          
          <Text style={{alignSelf :'center'}}>Deliveries</Text>
          <Text style={{alignSelf :'center'}}>Pulled from pool</Text>
        </View>
        <View
          style={{ backgroundColor: "#ED847E", height: 150, width: "33.33%" }}
        >
          <Text style={{alignSelf :'center' }}>26</Text>
          <View style={{alignSelf :'center' , paddingVertical : 10}}>
          <PoolLogo />
          </View>
          <Text style={{alignSelf :'center'}}>Orders</Text>
          <Text style={{alignSelf :'center'}}>Pushed to pool</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ height: 100, backgroundColor: "#FFB200", width: "50%" }}>
          <Text style={{alignSelf :'center'  , padding : 10 , fontWeight : 'bold' , fontSize : 20}}>N26,000</Text>
          <Text style={{alignSelf :'center'}}>Earnings</Text>
        </View>
        <View style={{ height: 100, backgroundColor: "#E8F0FE", width: "50%" }}>
          <Text style={{alignSelf :'center' , padding : 10 , fontWeight :'bold' , fontSize : 20}}>45</Text>
          <Text style={{alignSelf :'center'  }}>Active Riders</Text>
        </View>
      </View>
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="face-man-profile"
          size={24}
          color="black"
        />
        <Text style={{paddingLeft :10}}>Orders you can’t meet with? Push them to the order pool now</Text>
      </View>
      {/* <TouchableOpacity 
      onPress={()=>navigation.navigate('Onboording')}
      syle={{backgroundColor :'red'}}>
        <Text>test</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Dashbord;

const styles = StyleSheet.create({});
