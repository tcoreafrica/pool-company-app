import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RiderLogoBlue from "../../../constants/RiderLogoBlue";
import { dummydata2 } from "../../../data/dummydata2";
import { dummydata3 } from "../../../data/dummydata3";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import PhaseLoso from "../../../constants/PhaseLogo";

const RiderDetails = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
        style={{
          height: 80,
          flex: 1,
          borderRadius: 10,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 6,
          paddingLeft: 40,
          borderColor : "#DCD9D9",
          borderWidth : 1
        }}
      >
        <View style={{ position: "absolute", top: 17, left: 15 }}>
          <PhaseLoso />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{item.from}</Text>
          <AntDesign name="arrowright" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>{item.to}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{flexDirection :"row"}}>
            <TimeLogo style={{marginVertical : 3}}/>
          <Text style={{paddingLeft : 5}}>{item.date}</Text>
          </View>
          
          <View style={{flexDirection :"row"}}>
            <TimeLogo style={{marginVertical : 3 }} />
          <Text style={{paddingLeft : 5 , color :'red'}}>Express</Text>
          </View>
        </View>
      </TouchableOpacity>
  );
  const renderItem2 = ({item}) =>(
    <View
      style={{
        height: 110,
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 6,
        borderColor : "#DCD9D9",
        borderWidth : 1
      }}
    >
        <View style={{flexDirection :'row' }}>
        <Image source={item.img} style={{borderRadius : 17}}/>
        <Text style={{paddingLeft : 8 , paddingTop : 5 , fontWeight : 'bold'}}>{item.name}</Text>
        </View>
        <View style={{flexDirection :'row' , paddingVertical : 3 }}>
        <AntDesign name="star" size={17} color="black" />
        <AntDesign name="star" size={17} color="black" />
        <AntDesign name="star" size={17} color="black" />
        <AntDesign name="star" size={17} color="black" />
            <Text style={{paddingLeft : 8}}>{item.date}</Text>
        </View>
        <View>
            <Text>{item.description}</Text>
        </View>
        
    </View>
  )
  return (
    <ScrollView style={{  flex : 1 , backgroundColor :'white' , width :'100%' , paddingHorizontal :17}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop : 20
        }}
      >
        <View>
          <Text style={{color :'#8F9399'}}>Earning:</Text>
          <Text style={{fontWeight :'bold'}}>N104,850</Text>
        </View>

        <Image
          source={require("../../../assets/TDele.png")}
          style={{ height: 60, width: 60, borderRadius: 30 }}
        />
        <View style={{}}>
          <View style={{flexDirection :'row' , marginBottom : 10 , alignSelf :'center'}}>
          <Text style={{ alignSelf: "center" , fontWeight :'bold' , paddingRight : 8 }}>4.5</Text>
          <AntDesign name="star" size={19} color="#FEA250" />
          </View>
          
          <Text style={{fontWeight : '300'}}>12th July, 2010</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text  style={{fontWeight :'bold' , fontSize : 16}}>Tosin Dele</Text>
        <Text style={{fontWeight : '300'}}>450 deliveries</Text>
      </View>
      <View style={{ marginTop: 17 }}>
        <Text style={{color :'#8F9399'}}>tosinbay@gmail.com</Text>
        <Text >08123232323</Text>
      </View>
      <View
        style={{
          marginTop: 17,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{color :'#8F9399'}}>Adress</Text>
          <Text style={{fontWeight :'bold' , fontSize : 14}}>23, Idowu Str. Elliot, Ogba.</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#053582",
            borderRadius: 8,
            height: 25,
            width: 60,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontWeight: "700",
              padding: 2,
            }}
            onPress={()=>navigation.navigate('AssignOrders')}
          >
            Assign
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ height: 1, backgroundColor: "black", marginTop: 10 }}
      ></View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <RiderLogoBlue height={40} width={40}/>
        <Text style={{fontWeight :'bold' , paddingLeft : 8 , marginVertical :5}}>LAGLX2C</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{color :'#8F9399'}}>Deliveries</Text>
        <Text style={{fontWeight :'bold'}}>400</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{color :'#8F9399'}}>Cancelled</Text>
        <Text style={{fontWeight :'bold'}}>17</Text>
      </View>
      <View
        style={{ height: 1, backgroundColor: "black", marginTop: 10 }}
      ></View>
      <View style={{ marginTop: 10 , marginHorizontal : 10}}>
        <Text style={{fontWeight : 'bold' , fontSize : 16}}>Orders</Text>
      </View>
      <FlatList
        data={dummydata2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={{ marginTop: 10 , marginHorizontal : 10 }}>
        <Text style={{fontWeight : 'bold' , fontSize : 16}}>Reviews</Text>
        <Text>Top</Text>
      </View>
      <FlatList
        data={dummydata3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem2}
      />
    </ScrollView>
  );
};

export default RiderDetails;

const styles = StyleSheet.create({});
