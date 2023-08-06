import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { dummydata3 } from "../../../data/dummydata3";

const RiderDetails = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        height: 80,
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 6,
        paddingLeft: 60,
        elevation: 1,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.from}</Text>
        <Text>{item.to}</Text>
        <Text>{item.price}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.date}</Text>
        <Text>Express</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem2 = ({item}) =>(
    <View
      style={{
        height: 110,
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 6,
        
        elevation: 0.5
      }}
    >
        <View style={{flexDirection :'row' }}>
        <Image source={item.img} style={{borderRadius : 20}}/>
        <Text style={{paddingLeft : 8 , paddingTop : 5}}>{item.name}</Text>
        </View>
        <View>
            <Text>{item.date}</Text>
        </View>
        <View>
            <Text>{item.description}</Text>
        </View>
        
    </View>
  )
  return (
    <ScrollView style={{ marginHorizontal: 10 , flex : 1 , backgroundColor :'white'}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>Earning:</Text>
          <Text>N104,850</Text>
        </View>

        <Image
          source={require("../../../assets/TDele.png")}
          style={{ height: 60, width: 60, borderRadius: 30 }}
        />
        <View style={{}}>
          <Text style={{ alignSelf: "center" }}>4.5</Text>
          <Text>12th July, 2010</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Tosin Dele</Text>
        <Text>Tosin Dele</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>tosinbay@gmail.com</Text>
        <Text>08123232323</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>Adress</Text>
          <Text>23, Idowu Str. Elliot, Ogba.</Text>
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
        <Icon name="search" size={18} style={{}} />
        <Text>LAGLX2C</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>Deliveries</Text>
        <Text>400</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>Cancelled</Text>
        <Text>20</Text>
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
