import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import { useNavigation } from "@react-navigation/native";
import { getAllMyCompanyPool } from "../../../serveur/pools/pool";
import { TrackOrderCell } from "./TrackOrderCell";
const OrderFlatlist = ({}) => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllMyCompanyPool().then((res) => {
      setOrders(res.data.data);
    });
  }, []);

  return (
    <ScrollView>
      {orders.map((order, index) => (
        <TrackOrderCell data={order} key={index} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default OrderFlatlist;

const styles = StyleSheet.create({});
