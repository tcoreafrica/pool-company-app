import { Linking, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { rechargeWallet } from "../../../serveur/wallet/wallet";
import { WebView } from 'react-native-webview';

const PayementGateway = ({ navigation, route }) => {
  const { cost } = route.params;
  const [link,setLink]=useState('')

  const handleSubmit = () => {
    rechargeWallet({
      amount: cost,
      callback_url: "https://youtube.com",
    }).then((res) => {
      console.log(res)
      // setLink((res.data.authorization_url))
      // console.log;
    });
  };

  useEffect(()=>{
    handleSubmit()

  },[])
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
   {link!="" &&   <WebView source={{ uri: link }} style={{ flex: 1 }} />}
      {/* <View style={{ flex: 1, backgroundColor: "#D9D9D9", marginTop: 20 }}>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Payment gateway modal
        </Text>
      </View> */}
      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Card")}
          style={{ height: 40, backgroundColor: "#053582", borderRadius: 10 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              alignSelf: "center",
              paddingVertical: 7,
              fontSize: 17,
            }}
          >
            Accept
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ height: 40, backgroundColor: "white", borderRadius: 10 }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              paddingVertical: 7,
              fontSize: 17,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayementGateway;

const styles = StyleSheet.create({});
