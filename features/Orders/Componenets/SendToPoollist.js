import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { getAllMyCompanyPool } from "../../../serveur/pools/pool";
import { SendPoolCell } from "./SendPoolCell";
const SendToPoollist = ({}) => {
  const [orders, setOrders] = useState([]);

  useFocusEffect(
    useCallback(() => {
      orders.length<=0&& getAllMyCompanyPool().then((res) => {
        setOrders(res.data.data);
      });
    }, [])
  );

  const navigation = useNavigation();

  return (
    <ScrollView>
      {orders.map((order, index) => (
        <SendPoolCell data={order} navigation={navigation} key={index} />
      ))}
    </ScrollView>
  );
};

export default SendToPoollist;

const styles = StyleSheet.create({});
