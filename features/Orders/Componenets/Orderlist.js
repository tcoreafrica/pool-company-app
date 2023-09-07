import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import { useNavigation } from "@react-navigation/native";
import { getAllExchangePool } from "../../../serveur/pools/pool";
const Orderlist = ({}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orders.length <= 0 &&
      getAllExchangePool().then((res) => {
        setOrders(res.data.data);
      });
  }, []);

  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        height: 80,
        width: 400,
        borderRadius: 2,
        elevation: 1,
        padding: 5,
        flexDirection: "row",
      }}
    >
      <PhaseLoso />

      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Text>{item.pickUpLocation[0]}</Text>
          <AntDesign name="arrowright" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>{item.destinationLocation[0]}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.quantity}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", paddingRight: 30 }}>
            <TimeLogo style={{ marginVertical: 3 }} />
            <Text style={{ paddingLeft: 5 }}>{item.date.substr(0, 10)}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TimeLogo style={{ marginVertical: 3 }} />
            <Text style={{ paddingLeft: 5, color: "red" }}>Express</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AcceptOrder',{item})}
            style={{
              height: 30,
              borderRadius: 5,
              backgroundColor: "#053582",
              // marginHorizontal: 100,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                paddingVertical: 5,
                paddingHorizontal: 5,
              }}
            >
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  const _emptyState = () => {
    <Text>Empty state</Text>;
  };

  if (orders.length <= 0) {
    return <ActivityIndicator />;
  }
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item._id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={_emptyState}
    />
  );
};

export default Orderlist;

const styles = StyleSheet.create({});
