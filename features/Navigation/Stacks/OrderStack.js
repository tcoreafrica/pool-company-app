import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AcceptOrder from "../../Orders/Screens/AcceptOrder";
import Orders from "../../Orders/Screens/Orders";
import AcceptOrderTwo from "../../Orders/Screens/AcceptOrderTwo";
import OrderAccepted from "../../Orders/Screens/OrderAccepted";
import PushOrder from "../../Orders/Screens/PushOrder";
import TopUpRequest from "../../Orders/Screens/TopUpRequest";
import TopUpWallet from "../../Orders/Screens/TopUpWallet";
import AcceptOrderFinale from "../../Orders/Screens/AcceptOrderFinale";
import PayementGateway from "../../Orders/Screens/PayementGateway";
import Card from "../../Orders/Screens/Card";
import TopUpSuccess from "../../Orders/Screens/TopUpSuccess";
import OrderAcceptedFinale from "../../Orders/Screens/OrderAcceptedFinale";

const OrderStack = () => {
  const StackOrder = createNativeStackNavigator();
  return (
    <StackOrder.Navigator>
        <StackOrder.Screen name="Orders" component={Orders} options={{title : 'Order Exchange Pool'}}/>
      <StackOrder.Screen name="AcceptOrder" component={AcceptOrder} />
      <StackOrder.Screen name="AcceptOrderTwo" component={AcceptOrderTwo} />
      <StackOrder.Screen name="OrderAccepted" component={OrderAccepted} />
      <StackOrder.Screen name="PushOrder" component={PushOrder} />
      <StackOrder.Screen name="TopUpRequest" component={TopUpRequest} />
      <StackOrder.Screen name="TopUpWallet" component={TopUpWallet} />
      <StackOrder.Screen name="AcceptOrderFinale" component={AcceptOrderFinale} />
      <StackOrder.Screen name="PayementGateway" component={PayementGateway} />
      <StackOrder.Screen name="Card" component={Card} />
      <StackOrder.Screen name="TopUpSuccess" component={TopUpSuccess} />
      <StackOrder.Screen name="OrderAcceptedFinale" component={OrderAcceptedFinale} />
    </StackOrder.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
