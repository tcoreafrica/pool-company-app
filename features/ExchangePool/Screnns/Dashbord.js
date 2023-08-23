import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PoolLogo from "../../../constants/PoolLogo";
import CompanyOrderLogo from "../../../constants/CompanyOrderLogo";
import DrawerLogo from "../../../constants/DrawerLogo";
import OrderIcon from "../../../constants/OrderIcon";
import AvatarLogo from "../../../constants/Avatar";
import CompannyOrder from "../../../constants/CompannyOrder";
import PushedToPool from "../../../constants/PushedToPool";
import getWallet from "../../../serveur/wallet/wallet";
const Dashbord = ({ navigation }) => {
const [wallet,setWallet]=useState(null)
useEffect(()=>{
  getWallet().then((res)=>setWallet(res.data))
},[])

  return (
    <View style={{ marginHorizontal: 20, marginTop: 30 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" , alignItems:'center'}}>
        
        <TouchableOpacity style={{}}>
        <AvatarLogo />
        </TouchableOpacity>

        <Text style={{ fontWeight: "bold", fontSize: 19 }}>Welcom chinedu</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <DrawerLogo />
        </TouchableOpacity>
        
      </View>
      <View
        style={{
          backgroundColor: "#053582",
          marginTop: 20,
          height: 100,
          borderRadius: 25,
          flexDirection :'row',
          alignItems :'center',
          justifyContent:'space-between',
          paddingHorizontal : 10
          
        }}
      >
        <View style={{ marginHorizontal : 20  , flex :0.5}}>
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

       {!wallet&& <ActivityIndicator/>}
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 20,
          }}
        >
          N {wallet?.balance}
        </Text>
        </View>
        
        <TouchableOpacity
          style={{
            height: 57,
            backgroundColor: "white",
            borderRadius: 12,
            paddingTop: 15,
            flex : 0.5

            
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
      <View style={{ flexDirection: "row", marginTop: 20  }}>
        <View
          style={{ backgroundColor: "#E8F0FE", height: 150, width: "32.33%" , borderRadius : 10 }}
        >
          <Text style={{ alignSelf: "center" ,color :'#407BFF', fontWeight :'bold' , fontSize : 20}}>26</Text>
          <Text style={{ alignSelf: "center" ,color :'#407BFF'}}>Deliveries</Text>
          <View style={{ alignSelf: "center", paddingVertical: 10 }}>
            <PoolLogo />
          </View>

          
          <Text style={{ alignSelf: "center" ,color :'#407BFF'}}>Pulled from pool</Text>
        </View>
        <View
          style={{ backgroundColor: "#D5F8D6", height: 150, width: "32.33%" ,marginHorizontal : 10 , borderRadius : 10}}
        >
          <Text style={{ alignSelf: "center" , fontWeight :'bold', color :'#00CE2D' , fontSize : 20}}>26</Text>
          <Text style={{ alignSelf: "center"  , color :'#00CE2D'}}>Deliveries</Text>
          <View style={{ alignSelf: "center", paddingVertical: 10 }}>
            <CompannyOrder />
          </View>

          
          <Text style={{ alignSelf: "center", color :'#00CE2D' }}>Pulled from pool</Text>
        </View>
        <View
          style={{ backgroundColor: "#F5E6E4", height: 150, width: "32%" , borderRadius : 10}}
        >
          <Text style={{ alignSelf: "center" , fontWeight :'bold' ,color : '#ED847E', fontSize : 20}}>26</Text>
          <Text style={{ alignSelf: "center" ,color : '#ED847E'}}>Orders</Text>
          <View style={{ alignSelf: "center", paddingVertical: 10 }}>
            <PushedToPool />
          </View>
          
          <Text style={{ alignSelf: "center",color : '#ED847E' }}>Pushed to pool</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ height: 100, backgroundColor: "#FFB200", width: "50%" , marginRight : 10 , borderRadius : 10}}>
          <Text
            style={{
              alignSelf: "center",
              padding: 10,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            N26,000
          </Text>
          <Text style={{ alignSelf: "center" }}>Earnings</Text>
        </View>
        <View style={{ height: 100, backgroundColor: "#E8F0FE", width: "50%" , borderRadius : 10}}>
          <Text
            style={{
              alignSelf: "center",
              padding: 10,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            45
          </Text>
          <Text style={{ alignSelf: "center" }}>Active Riders</Text>
        </View>
      </View>
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <OrderIcon />
        <Text style={{ paddingLeft: 10 }}>
          Orders you can’t meet with? Push them to the order pool now
        </Text>
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
