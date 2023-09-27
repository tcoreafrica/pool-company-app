import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import { useNavigation } from "@react-navigation/native";
import { getAllExchangePool } from "../../../serveur/pools/pool";
import Collapsible from "react-native-collapsible";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrderDetails from "./OrderDetails";
import { OrderCell } from "./OrderCell";
import { AddressTextFromCoordinates } from "../../../serveur/helper";

const Orderlist = ({}) => {
  const [orders, setOrders] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // orders.length <= 0 &&
    getAllExchangePool().then((res) => {
      setOrders(res.data.data);
    });
  }, []);


  useEffect(() => {
    AddressTextFromCoordinates('60.233','43.23').then((res) => {
      console.log(res);
    });
  }, []);


  const navigation = useNavigation(); 
  if (orders.length <= 0) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView>
      {orders.map((item, index) => (
        <OrderCell key={index} item={item} navigation={navigation}/>
      ))}
    </ScrollView>
    
  );
};

export default Orderlist;
